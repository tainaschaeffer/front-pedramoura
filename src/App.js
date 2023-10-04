// import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import Produto from './components/Produto';
import Venda from './components/Venda';
import './styles/sidebar.css'; // Importe o arquivo CSS
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/produto" Component={Produto} />
          <Route path="/venda" Component={Venda} />
        </Routes>
      </Router>
  );
}


export default App;
