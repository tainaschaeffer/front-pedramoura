import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-3 col-lg-2 d-md-block bg-danger sidebar">
            <Sidebar />
          </nav>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <h1>Em construção</h1>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
