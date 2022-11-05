import React from 'react';
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import ProductListing from './components/ProductListing';
import Header from './components/Header';
import './App.css';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
