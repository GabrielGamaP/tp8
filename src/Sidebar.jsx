import React from 'react';
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="list-container">
        <div className="icon-container">
          <i className="fa fa-bars"></i>
        </div>
        <ul>
          <li>
            <div className="list-item-card">
              <a href="#Home">&#x1F3E0; Home</a>
            </div>
          </li>
          <li>
            <div className="list-item-card">
              <a href="#Conta">&#x1F464; Conta</a>
            </div>
          </li>
          <li>
            <div className="list-item-card">
              <a href="#Configurações">&#x1F6E0; Configurações</a>
            </div>
          </li>
          <li>
            <div className="list-item-card">
              <a href="#Pendências">&#x1F4D6; Pendências</a>
            </div>
          </li>
          <li>
            <div className="list-item-card">
              <a href="#Personalização">&#x1F58C; Personalização</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;