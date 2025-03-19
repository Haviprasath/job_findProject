import React from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./style.css";

const App = () => {
  return (
    <div className="d-flex">
        <Sidebar />
        <div className="col-9">
      <Dashboard />
    </div>
    </div>
  );
};

export default App;
