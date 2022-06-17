import React, { useState } from "react";
// import data from "../../db/data.json"
import Task from "./Task";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [list, setList] = useState([]);

  // const addTask = () => {
  //   let copy = [...list]
  //   copy = [...copy,{id : list.length + 1 , task : task , time : time , complete : false}]
  //   setList(copy);
  // };

  const addTask = () => {
    let copy = [...list]
    copy = [...copy,{id : list.length + 1 , task : task , time : time }]
    setList(copy);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(task,time)
    setTask("")
    setTime("")
    alert('add to do list successfuly')
  }

  const deleteItem = (id) => {

    if( window.confirm("yakin deck??") ){
      const newArray = list.filter(todos => todos.id !== id)
      setList(newArray)
    }

  }

  return (
    <>
      <div className="container mt-2">
        <div>
          <h1 className="text-white">Todo App</h1>
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
            className="fs-5 d-flex btnCustom"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
      <div className="container mt-3 py-3">
        {list.map((li) => {
          return <Task todo={li} deleteItem={deleteItem} />;
        })}
      </div>
    </>
  );
};

export default TodoList;
