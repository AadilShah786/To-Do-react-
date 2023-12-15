import React, {useState, useEffect} from "react";
import Panel from "./left_group";
import '../css/left.css';
import data, {updateLocalStorage} from "./data";


const old_group=data.old_group;
const group=data.grouplist;
const info=data.info;

function Left({onClick}) {
  const [groupItems, setgroupItems] = useState([]);
  
  const updateTaskItems = () => {
    const reversedTasks = group.slice().reverse();
    const newTaskItems = reversedTasks.map((task) => (
      <Panel key={task.id} id={task.id} groupName={task.name} color={task.color} deletegroup={deletegroup} renamegroup={renamegroup} selectgroup={selectgroup}/>
    ));
    setgroupItems(newTaskItems);
  };
  function deletegroup(id){
    old_group.push(group.filter(task => task.id === id));
    const updatedTasks = group.filter(task => task.id !== id);
    group.length = 0;
    group.push(...updatedTasks);
    updateTaskItems(); // Update task items after data change
    updateLocalStorage(data);
   
  }
  function renamegroup(id, newGroupName) {
    const updatedTaskIndex = group.findIndex(task => task.id === id);
    if (updatedTaskIndex !== -1) {
      // Ensure the task with the given id exists in the array
      group[updatedTaskIndex] = { ...group[updatedTaskIndex], name: newGroupName };
      updateTaskItems();
      updateLocalStorage(data);
    } else {
      console.log("Task not found");
    }
  }
  function selectgroup(id){

    info.selected_group_id=id;
    onClick();
    updateTaskItems();
    updateLocalStorage(data);
  }
  function getRandomColor() {
    // Generating random values for R, G, and B (red, green, blue) channels
    const r = Math.floor(Math.random() * 256); // Random value between 0 and 255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    // Constructing a CSS color string using the generated values
    const randomColor = `rgb(${r}, ${g}, ${b})`;
  
    return randomColor;
  }
  
  function addgroup(){
    
      const newTask = { id: info.groupcount+1, name: "" , color:getRandomColor() };
      group.push(newTask);
      info.groupcount ++;
      updateTaskItems();
      updateLocalStorage(data);
  }
  
  useEffect(() => {
    updateTaskItems(); // Initial update of task items when the component mounts
  }, []);

    return (
      <div className="left">
        <div className="left_up">
          {groupItems}
        </div>
        <button type="button" className="cngbutton" onClick={addgroup}>+ create new group</button>
      </div>
    );
  }
  
  export default Left;
  