import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Admin from './components/Admin';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
