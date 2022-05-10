import React from "react";
import {Link} from 'react-router-dom';

export default function Navbar() {
    // Renderizar los links para navegar entre componentes
  return (
    <nav className="navbar">
      <Link to='/'> Inicio </Link>
      <Link to='/nosotros'> Nosotros </Link>
      <Link to='/productos'> Productos </Link>
      <Link to='/productos/nuevo'> Añadir nuevo producto </Link>
    </nav>
  );
}
