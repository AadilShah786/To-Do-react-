import React, { useState, useEffect } from 'react';
import Section from "./section";
import Task from "./task";
import '../css/centre.css';
import data2,{updateLocalStorage} from "./data";

const old_data=data2.old_data;
const group=data2.grouplist;
const info=data2.info;
const data=data2.tasklist;

function Centre({reRender}) {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  useEffect(() => {
    // Use the 'reRender' prop to trigger re-render logic here
    // This logic will execute whenever 'reRender' changes
    updateTaskItems();
  }, [reRender]);

  const updatedata = (value) => {
    data.push(value);
    console.log('Value to be updated:', data);
    updateTaskItems(); // Update task items after data change
  };
  function getdate(){
    const currentDate = new Date();
    // Getting date
    const date = currentDate.getDate(); // Day of the month (1-31)
    const month = currentDate.getMonth() + 1; // Month (0-11). Adding 1 to match conventional month numbering (1-12)
    const year = currentDate.getFullYear(); // Full year (e.g., 2023)
    // Getting time
    const hours = currentDate.getHours(); // Hour (0-23)
    const minutes = currentDate.getMinutes(); // Minutes (0-59)
    const seconds = currentDate.getSeconds(); // Seconds (0-59)
    
    // Displaying date and time
    console.log(`Current Date: ${date}-${month}-${year}`);
    console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
    
    var seq=[hours,minutes,date,month];
    return seq;
    }
  const handleAddClick = () => {
    if (task.trim() !== '') {
      const newTask = { id: info.datacount +1, group_id:info.selected_group_id, text: task ,time:getdate()};
      updatedata(newTask);
      info.datacount++;
      setTask('');
    }
  };

  const deleteTask = (taskId) => {
    old_data.push(data.filter(task => task.id === taskId));
    const updatedTasks = data.filter(task => task.id !== taskId);
    data.length = 0;
    data.push(...updatedTasks);
    updateTaskItems(); // Update task items after data change
    console.log(old_data);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const updateTaskItems = () => {
    const filteredTasks = data.filter(task => task.group_id === info.selected_group_id); // Filter tasks by ID
    const reversedTasks = filteredTasks.slice().reverse();
    const newTaskItems = reversedTasks.map((task) => (
      <Task key={task.id} id={task.id} taskName={task.text} time={task.time} deleteTask={deleteTask} />
    ));
    updateLocalStorage(data2);
    setTaskItems(newTaskItems);
  };

  useEffect(() => {
    updateTaskItems(); // Initial update of task items when the component mounts
  }, []);
  var color='rgb(10,20,30)';
  try{
  var selectedgroup = group.filter(task => task.id === info.selected_group_id);
   color =selectedgroup[0].color ;
  }catch(e){console.log(e)}

  return (
    <div className="centre">
      <div className="centre_top" >
        <div className="scroller">
          <Section />
          <Section />
          <Section />
          <Section />
        </div>
      </div>
      <div className="main" style={{border:`2px solid ${color}`}}>
        <div className="task_list"  >
          {taskItems}
        </div>
        <form className="task_add" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="task_text"
            placeholder="Add a task"
            value={task}
            onChange={handleInputChange}
          />
          <button type="submit" className="add_button" onClick={handleAddClick}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Centre;
