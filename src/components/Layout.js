import React from "react";
import { Routes, Route } from "react-router-dom";
import About from '../screens/About';
import Products from '../screens/Products';
import Home from '../screens/Home';
import ProductForm from '../screens/ProductForm';

export default function Layout() {
  // Layout va a tener el contenido dinámico. Match entre rutas y componentes.
  // Componente Routes que englobe todas las Rutas
  return (
    <Routes>
      <Route path='/nosotros' element={<About />} />
      <Route path='/productos' element={<Products />} >
            {/* Rutas hijas de /productos /productos/nuevo */}
            <Route path="nuevo" element={ <ProductForm /> }> </Route>
      </Route>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}
