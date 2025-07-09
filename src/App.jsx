import React, { useState } from "react";
import Header from './components/Header'
import ProductList from './pages/ProductList'
import Footer from './components/Footer'

import { Routes, Route } from "react-router";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import { products } from './dummyData'


export default function App() {

  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('default')

  const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))

  const getSortedProducts = (products, sortBy) => {
    switch(sortBy) {
      case 'title':
        return [...products].sort((a, b) => a.title.localeCompare(b.title))
      case 'price-low-high':
        return [...products].sort((a, b) => a.price - b.price)
      case 'price-high-low':
        return [...products].sort((a, b) => b.price - a.price)
      default:
        return products
    }
  }

  const sortedProducts = getSortedProducts(filteredProducts, sortBy)

  function searchProducts(value) {
    setSearch(value)
  }

  function handleSort(value) {
    setSortBy(value)
  }

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
       <Header/>
       <Routes>
          <Route index element={<ProductList products={sortedProducts} searchProducts={searchProducts} onSort={handleSort} />} />
          <Route path="product/:sku" element={<ProductDetail/>}/>
          <Route path="cart" element={<CartPage/>}/>
       </Routes>
       <Footer/> 
    </div>
  );
}
