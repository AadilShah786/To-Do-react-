import React from "react";
import '../css/right.css';
import Date from "./date";
import Data from "./data";

const tasklist=Data.tasklist;
const info=Data.info;


function Right() {
  // const [dateItems, setdateItems] = useState([]);
  
  // const updatedateItems = () => {
  //   const reversedTasks = group.slice().reverse();
  //   const newTaskItems = reversedTasks.map((task) => (
  //     <Panel key={task.id} id={task.id} groupName={task.name} color={task.color} deletegroup={deletegroup} renamegroup={renamegroup} selectgroup={selectgroup}/>
  //   ));
  //   setgroupItems(newTaskItems);
  // };
  const groupedByDateAndMonth = tasklist.reduce((acc, task) => {
    const key = `${task.time[2]}/${task.time[3]}`; // Creating a key as "date/month"
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(task);
    return acc;
  }, {});
  
  console.log('Tasks grouped by third and fourth elements in time array:', groupedByDateAndMonth);
    return (
      <div className="right">
        <div className="nav">
          <div className="scroll_date">
        <Date/>
        <Date/>
        <Date/>
        <Date/>
        <Date/>
        <Date/>
        <Date/>
        <Date/>
        </div>
        </div>
       <div className="bottom">
        <div className="time">

        </div>
       </div>
      </div>
    );
  }
  
  export default Right;
  