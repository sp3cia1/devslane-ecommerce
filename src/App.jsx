import React, { useState, useEffect } from "react";
import Header from './components/Header'
import ProductList from './pages/ProductList'
import Footer from './components/Footer'

import { Routes, Route } from "react-router";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import { getProducts } from './api';


export default function App() {

  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('default')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const data = await getProducts()
        setProducts(data.products)
      } catch (error) {
        console.error('Failed to fetch products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

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
    <div className="bg-[rgb(244,245,246)] flex flex-col min-h-screen">
       <Header/>
       <Routes>
          <Route index element={<ProductList products={sortedProducts} searchProducts={searchProducts} onSort={handleSort} loading={loading} />} />
          <Route path="product/:id" element={<ProductDetail/>}/>
          <Route path="cart" element={<CartPage/>}/>
       </Routes>
       <Footer/> 
    </div>
  );
}
