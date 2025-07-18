import React, { useState, useEffect, useMemo, useCallback } from "react";
import Header from './components/Header'
import ProductList from './pages/ProductList'
import Footer from './components/Footer'
import Alert from './components/Alert'

import { Routes, Route } from "react-router";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import AuthPage from "./pages/AuthPage";
import { getProducts } from './api';
import ProtectedRoutes from "./pages/ProtectedRoute";
import Loading from "./components/Loading";
import axios from "axios";
import { AlertContext } from './contexts/AlertContext';
import { UserContext } from './contexts/UserContext';

export default function App() {

  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('default')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : {};
  })
  const [user, setUser] = useState(undefined)
  const [alert, setAlert] = useState(undefined)
  const [loadingUser, setLoadingUser] = useState(true)

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
      axios.get("https://myeasykart.codeyogi.io/me", {
        headers: {Authorization:token}
      }).then((response)=>{
        setUser(response.data);
        setLoadingUser(false)
      })
    } else{
      setLoadingUser(false)
    }
  },[])  
 
  const userData = useMemo(() => ({ user, setUser }), [user, setUser]);

  const removeAlert = useCallback(() => {
    setAlert(null);
  }, []);

  const showAlert = useCallback((message, type = 'info') => {
    setAlert({ message, type });
  }, []);

  const alertValue = useMemo(() => ({
    alert,
    setAlert: showAlert,
    removeAlert
  }), [alert, showAlert, removeAlert]);

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

  const handleRemovalFromCart = useCallback((productId) => {
    const newCart = {...cart};
    delete newCart[productId];
    setCart(newCart);
  }, [cart]);

  const totalCount = useMemo(() => 
    Object.keys(cart).reduce((prev, current) => {
      return prev + cart[current];
    }, 0),
    [cart]
  );

  if (loadingUser){
    return <Loading/>
  }

  return (
    <div className="bg-[rgb(244,245,246)] flex flex-col min-h-screen">
      <AlertContext.Provider value={alertValue}>
        <UserContext.Provider value={userData}>
          <Header productCount={totalCount}/>
          <Routes>
              <Route path="auth/:authType" element={<AuthPage  />}/>
              <Route path="/*" element={
                <ProtectedRoutes>
                  <Route index element={<ProductList products={sortedProducts} searchProducts={searchProducts} onSort={handleSort} loading={loading} />} />
                  <Route path="product/:id" element={<ProductDetail handleAddToCart={handleAddToCart} />} />
                  <Route path="cart" element={<CartPage cart={cart} handleRemovalFromCart={handleRemovalFromCart} setCart={setCart} />} />
                </ProtectedRoutes>
              }/>
            </Routes>
         <Footer/> 
         
         <Alert/>
        </UserContext.Provider>
      </AlertContext.Provider>
    </div>
  );
}

