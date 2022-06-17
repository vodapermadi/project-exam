import React, { useState } from "react";
import CardComponent from "./component/todolist/CardComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./component/home/Home";
import NotFound from "./notfound/NotFound";
import Color from "./component/tools/palete/Color";
import MenuTools from "./component/menu/MenuTools";

function App() {
  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path="/project-exam" element={<Home/>} />
          <Route path="/tools/menu" element={<NotFound/> }/>
          <Route path="/mini-games/menu" element={<NotFound/>} />
          <Route path="/mini-project/todolist" element={<CardComponent/>} />
          <Route path="/mini-project/color" element={<Color/>} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
