import React from 'react'

const Task = ({ task, time }) => {
  return (
    <>
      <div className='p-4 shadow border mt-3 bgTask'>
        <h5>Task : {task}</h5>
        <h5>Time : {time}</h5>
      </div>
    </>
  )
}

export default Task