import React, { useState } from "react";
import data from "../../db/data.json"
import Task from "./Task";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [list, setList] = useState(data);

  const addTask = () => {
    setList([...list,{id : list.length + 1 ,task : task,time : time,complete : false}]);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(task,time)
    setTask("")
    setTime("")
  }

  return (
    <>
      <div className="container mt-2">
        <div>
          <h1>Todo App</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control fs-5 py-2"
              placeholder="Task"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
              required
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
              required
            />
          </div>
          <button
            className="btn py-1 px-3 fs-5 d-flex btnCustom"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
      <div className="container mt-3 py-3">
        {list.map((li) => {
          return <Task todo={li.id} task={li.task} time={li.time} complete={li.complete} />;
        })}
      </div>
    </>
  );
};

export default TodoList;
