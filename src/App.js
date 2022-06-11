import React from "react";
import CardComponent from "./component/todolist/CardComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./component/home/Home";
import NotFound from "./notfound/NotFound";

function App() {
  return (
    <>
    <div id="mainBackground">
      <Router>
        <Routes>
          <Route path="/project-exam" element={<Home/>} />
          <Route path="/mini-project/todolist" element={<CardComponent/>} />
          <Route path="/mini-game" element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
