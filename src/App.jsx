import React, { useState, useEffect, useMemo, useCallback } from "react";
import Header from './components/Header'
import ProductList from './pages/ProductList'
import Footer from './components/Footer'

import { Routes, Route } from "react-router";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import AuthPage from "./pages/AuthPage";
import { getProducts } from './api';


export default function App() {

  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('default')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : {};
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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

  const filteredProducts = useMemo(() => 
    products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase())),
    [products, search]
  );

  const getSortedProducts = useCallback((products, sortBy) => {
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
  }, []);

  const sortedProducts = useMemo(() => 
    getSortedProducts(filteredProducts, sortBy),
    [filteredProducts, sortBy, getSortedProducts]
  );

  const searchProducts = useCallback((value) => {
    setSearch(value)
  }, []);

  const handleSort = useCallback((value) => {
    setSortBy(value)
  }, []);

  const handleAddToCart = useCallback((productId, count) => {
    const oldCount = cart[productId] || 0;
    setCart({...cart, [productId]: oldCount + count});
  }, [cart]);

  const totalCount = useMemo(() => 
    Object.keys(cart).reduce((prev, current) => {
      return prev + cart[current];
    }, 0),
    [cart]
  );

  return (
    <div className="bg-[rgb(244,245,246)] flex flex-col min-h-screen">
       <Header productCount={totalCount}/>
       <Routes>
          <Route index element={<ProductList products={sortedProducts} searchProducts={searchProducts} onSort={handleSort} loading={loading} />} />
          <Route path="product/:id" element={<ProductDetail handleAddToCart={handleAddToCart}/>}/>
          <Route path="cart" element={<CartPage cart={cart}/>}/>
          <Route path="auth/:authType" element={<AuthPage/>}/>
       </Routes>
       <Footer/> 
    </div>
  );
}
