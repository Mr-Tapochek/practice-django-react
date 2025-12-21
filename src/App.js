import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalog from './components/catalog/Catalog';
import Product from './components/catalog/Product';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Catalog/>}/>
        <Route path='/product/:id' element={<Product/>}/>
      </Routes>
    </Router>
  );
}

export default App;
