import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Produto from './Produto';

const Sidebar = () => {

  const [showSubmenu, setShowSubmenu] = useState(null);

  const toggleSubmenu = (itemIndex) => {
    setShowSubmenu(itemIndex === showSubmenu ? null : itemIndex);
  };

  const handleSubitemClick = (subitem) => {
    window.location.href = subitem.route
  }

  const menuItems = [
    {
      label: 'Produtos',
      subitems: [
        { name: 'Listar', route: '/produtos/listar' },
        { name: 'Cadastrar', route: '/produtos/cadastrar' }
      ]
    },
    {
      label: 'Vendas',
      subitems: [
        { name: 'Listar', route: '/vendas/listar' },
        { name: 'Cadastrar', route: '/vendas/cadastrar' }
      ]
    },
  ];

  return (
    <nav id="sidebar" className='vh-100 color-white'>
      <div className="position-sticky vh-100 ">
        <a href="/" class="d-flex align-items-center my2 link-body-emphasis text-decoration-none">
          <img src='/images/pedramoura.jpeg' alt='Imagem' className='w-25'></img>
          <span class="fs-5">PEDRA MOURA</span>
        </a>
        <hr className='my-2'/>
        <ul className="list-unstyled ps-0 m">
          {menuItems.map((menuItem, index) => (
            <li key={index} className="mb-1" onClick={() => toggleSubmenu(index)}>
              <a className="nav-link active" href="#">
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
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}


export default Sidebar;