import React from 'react';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#3E7996', color: '#fff', width:'100%', height: "7%"}}>
      <h3 style={{ margin: 0 , marginLeft: 10 }}>NavBar</h3>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ margin: '0 10px' }}> Cadastros </li>
        <li style={{ margin: '0 10px' }}> Carteira </li>
        <li style={{ margin: '0 10px' }}> Gráficos </li>
      </ul>
    </nav>
  );
}

export default Navbar;
