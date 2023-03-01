import './App.css';
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';

function App() {
    return (
    <div className = "App">
      <Navigation/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
    </div>

)
}

export default App;
