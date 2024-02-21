import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import Resume from "./pages/Resume";
import Home from "./pages/Home";
import CrudApp from "./pages/Crud";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Toaster position="top-center" reverseOrder={false} />
          <Routes>
            
            <Route path="/" element={<Resume/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/crudapp" element={<CrudApp/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
