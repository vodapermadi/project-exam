import React from "react";

const Task = ({ todo, handleComplete, deleteItem }) => {
  return (
    <>
      <div
        className="p-4 shadow border mt-3 bgTask"
        id={todo.id}
        key={todo.id + todo.task}
      >
        <h5 style={todo.complete ? { color: "#87faa2" } : { color: "#fae3dc" }}>
          Task : {todo.task}
        </h5>
        <h5 style={todo.complete ? { color: "#87faa2" } : { color: "#fae3dc" }}>
          Time : {todo.time}
        </h5>
        <button className="btn btn-outline-danger text-white fs-5 mt-2" onClick={() => deleteItem(todo.id)}>Delete</button>
      </div>
    </>
  );
};

export default Task;
