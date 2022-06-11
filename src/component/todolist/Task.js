import React from 'react'

const Task = ({ todo, task, time, complete }) => {
  return (
    <>
      <div className='p-4 shadow border mt-3 bgTask' id={todo} key={todo + task}>
        <h5 style={complete ? { color : "#87faa2" } : { color : "#fae3dc" }}>Task : {task}</h5>
        <h5 style={complete ? { color : "#87faa2" } : { color : "#fae3dc" }}>Time : {time}</h5>
        <h5 style={complete ? { color : "#87faa2" } : { color : "#fae3dc" }}>Complete : {complete ? "true" : "false"}</h5>
      </div>
    </>
  )
}

export default Task