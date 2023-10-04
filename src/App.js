// import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import './styles/sidebar.css'; // Importe o arquivo CSS
import { useUserAuth } from "./context/userAuthContext";
import { Outlet } from 'react-router-dom';

const App = () => {
  const { user, logOut } = useUserAuth();
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar /> 
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <h1>Bem Vindo!</h1>
          <Outlet />
        </div>
      </div>
    </div>
  );
};


export default App;
