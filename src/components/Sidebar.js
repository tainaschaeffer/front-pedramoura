import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Produto from './Produto';

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
    </div>
  );
};

export default Sidebar;