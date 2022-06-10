import React, { useState } from "react";
import Task from "./Task";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    setList([...list, { task: task, time: time }]);
    setTime("");
    setTask("");
  };

  return (
    <>
      <div className="container mt-2">
        <div>
          <h1>Todo App</h1>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control fs-5 py-2"
            placeholder="Task"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control fs-5 py-2"
            placeholder="Time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </div>
        <button
          onClick={addTask}
          className="btn py-1 px-3 fs-5 d-flex btnCustom"
        >
          Add
        </button>
      </div>
      <div className="container mt-3 py-3">
        {list.map((li) => {
          return <Task task={li.task} time={li.time} />;                                                    
        })}
      </div>
    </>
  );
};

export default TodoList;
