// import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import './styles/sidebar.css'; // Importe o arquivo CSS
import { useUserAuth } from "./context/userAuthContext";

const App = () => {
  const { user, logOut } = useUserAuth();
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar /> 
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <h1>Em construção</h1>
        </div>
      </div>
    </div>
  );
};


export default App;
