import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Produto from './Produto';
import { useUserAuth } from "../context/userAuthContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [showSubmenu, setShowSubmenu] = useState(null);

  const toggleSubmenu = (itemIndex) => {
    setShowSubmenu(itemIndex === showSubmenu ? null : itemIndex);
  };

  const handleSubitemClick = (subitem) => {
    //aqui chama a rota
    <Router>
        <Route path={subitem.route} Component={<Produto/>}></Route>
    </Router>
  };

  const menuItems = [
    { label: 'Produtos', subitems: [{name: 'Listar', route: '/listar-produto', file: 'Produto'},
                                    {name: 'Cadastrar', route: 'lala'}] },
    { label: 'Vendas', subitems: [{name: 'Listar', route: 'lala'},
                                  {name: 'Cadastrar', route: 'lala'}] },
  ];

  const { user, logOut } = useUserAuth();

  return (
    <div className="bg-light border-right" id="sidebar">
      <div className="sidebar-heading">PEDRAMOURA</div>
      <ul className="list-group list-group-flush">
        {menuItems.map((menuItem, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => toggleSubmenu(index)}
          >
            {menuItem.label}
            {showSubmenu === index && (
              <ul className="list-group">
                {menuItem.subitems.map((subitem, subindex) => (
                  <li key={subindex} className="list-group-item" onClick={() => handleSubitemClick(subitem)}>
                    {subitem.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {user ? (
        <button onClick={logOut}>Sair</button>
      ) : (
        <Link to="/login">
          <button onClick={logOut}>Entrar</button>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;