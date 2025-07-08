import React, { useState } from "react";

import Header from './components/Header'
import Container from './components/Container'
import Footer from './components/Footer'
import ProductDetail from './components/ProductDetail';

function App() {
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('default')

  const products = [
    {
      title: "Black Printed Coffee Mug",
      price: 15.00,
      category: "Mugs",
      imageUrl: "https://codeyogi.io/coffee-mug.jpeg",
      sale: false
    },
    {
      title: "Green Printed Tshirt",
      price: 34.00,
      category: "Tshirts",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZ0PG7B58nDVDGJLFaoQnZMmMoyqYOs7Uqw&s",
      sale: false
    },
    {
      title: "Father's Day Coffee Mug",
      price: 19.00,
      category: "Mugs", 
      imageUrl: "https://codeyogi.io/coffee-mug.jpeg",
      sale: false
    },

    {
      title: "Personalised Mug",
      price: 15.00,
      category: "Mugs",
      imageUrl: "https://codeyogi.io/coffee-mug.jpeg", 
      sale: false
    },
    {
      title: "Printed Brown Tshirt",
      price: 25.00,
      category: "Tshirts",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZ0PG7B58nDVDGJLFaoQnZMmMoyqYOs7Uqw&s",
      sale: true
    },
    {
      title: "Printed Dark Blue Tshirt",
      price: 34.00,
      category: "Tshirts",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZ0PG7B58nDVDGJLFaoQnZMmMoyqYOs7Uqw&s",
      sale: false
    },
    {
      title: "Printed Green Tshirt",
      price: 28.00,
      category: "Tshirts",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZ0PG7B58nDVDGJLFaoQnZMmMoyqYOs7Uqw&s",
      sale: true
    },
    {
      title: "Printed Tshirt Coffee Black Color",
      price: 25.00,
      category: "Tshirts",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZ0PG7B58nDVDGJLFaoQnZMmMoyqYOs7Uqw&s",
      sale: true
    },
    {
      title: "Typography Teal Printed Tshirt",
      price: 32.00,
      category: "Tshirts",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZ0PG7B58nDVDGJLFaoQnZMmMoyqYOs7Uqw&s",
      sale: true
    }
  ]

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
        <Container products={sortedProducts} searchProducts={searchProducts} onSort={handleSort} />
       {/* <ProductDetail/> */}
       <Footer/> 
    </div>
  );
}

export default App;
