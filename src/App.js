import React from "react";
import CardComponent from "./component/todolist/CardComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./component/home/Home";

function App() {
  return (
    <>
    <div id="mainBackground">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/mini-project/todolist" element={<CardComponent/>} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
