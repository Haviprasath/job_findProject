import React from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./style.css";

const App = () => {
  return (
    <div className="container-fluid">
  <div className="row">
    <div className="col-md-3">
      <Sidebar />
    </div>
    <div className="col-md-9">
      <div className="content p-4">
        {/* Your main content goes here */}
        <Dashboard/>
      </div>
    </div>
  </div>
</div>
  );
};

export default App;