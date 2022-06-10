import React from 'react'
import NavbarComponent from '../../header/NavbarComponent'
import Header from './Header'
import TodoList from './TodoList'

const CardComponent = () => {
  return (
    <>
    <NavbarComponent/>
      <div className="text-center py-5 px-4" id='todolist'>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-7 bgTask my-3">
              <Header />
            </div>
            <div className="col-md-6 my-3">
              <TodoList/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardComponent