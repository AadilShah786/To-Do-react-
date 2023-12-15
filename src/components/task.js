import React from "react";

function Task({ id, taskName,time, deleteTask }) {
    const handleDelete = () => {
        deleteTask(id);
    };
    var timestring = `${time[0]}:${time[1]},${time[2]}/${time[3]}`;
    return (
        <div key={id} className="task">
            <input
                type="radio"
                id={`option-${id}`}
                name="options"
                value={`option-${id}`}
                onChange={handleDelete}
                className="radio"
            />
            <label htmlFor={`option-${id}`} className="task_label">
                <p className="task_paragraph">{taskName}</p>
                <p className="task_time">{timestring}</p>
            </label>
        </div>
    );
}

export default Task;
