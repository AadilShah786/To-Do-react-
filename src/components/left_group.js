import React, { useEffect, useState } from "react";
import pencil from '../assets/pencil_icon.png';
import deleteicon from '../assets/delete_icon.png';
import Data from "./data";

const info=Data.info;
const data=Data.tasklist;

function Panel({ id, groupName,color, deletegroup, renamegroup, selectgroup }) {
  const [editing, setEditing] = useState(false);
  const [newGroupName, setNewGroupName] = useState(groupName);

  const handleClick = (e) => {
    
    setEditing(true);
  };
  useEffect(() => {
    if(groupName===""){
      handleClick();
    } // Initial update of task items when the component mounts
  }, []);

  
  const handleBlur = () => {
    setEditing(false);
    if (newGroupName.trim() !== '') {
      renamegroup(id, newGroupName);
    } else {
      setNewGroupName(groupName);
    }
  };

  const handleChange = (e) => {
    setNewGroupName(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default behavior (form submission, page refresh)
      handleBlur(); // Save changes on pressing Enter
    }
  };
  
  const handledeleteClick =(e)=>{
    deletegroup(id);
  }
  const handleselectgroup=(e)=>{
    selectgroup(id);
  }
  var styler='none';
  if(info.selected_group_id===id){
    styler=`5px solid ${color}`;
  }
  var filteredTasks = data.filter(task => task.group_id ===id);
  var taskcount=filteredTasks.length;
  return (
    <div className="group_panel" style={{border:`${styler}`}}>
      <div className="design" style={{backgroundColor:color}}></div>
      <div className="right_panel">
        {editing ? (
          <input
            type="text"
            value={newGroupName}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown} // Listen for Enter key
            autoFocus
          />
        ) : (
          <h1 onClick={handleselectgroup} style={{ cursor: 'pointer' }}>
            {groupName}
          </h1>
        )}
        <h2>{taskcount} Tasks</h2>
      </div>
      <div className="rightest">
        <img
          src={pencil}
          className="icon"
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
          alt="Edit"
        />
        <img
          src={deleteicon}
          className="icon"
          onClick={handledeleteClick}
          
          alt="delete"
        />
      </div>
    </div>
  );
}

export default Panel;
