import { useState, useEffect } from "react";
import CartList from "../components/CartList"
import CartTotal from "../components/CartTotal"
import { getProductById } from "../api";
import Loading from "../components/Loading";

export default function CartPage({cart}) {
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        setLoading(true);
        
        // Get all product IDs from cart
        const productIds = Object.keys(cart);
        
        if (productIds.length === 0) {
          setCartProducts([]);
          setLoading(false);
          return;
        }

        // Fetch all products concurrently using Promise.all
        const productPromises = productIds.map(id => getProductById(id));
        const products = await Promise.all(productPromises);
        
        // Combine product data with cart quantities
        const cartProductsWithQuantity = products.map(product => ({
          id: product.id,
          title: product.title,
          thumbnail: product.thumbnail,
          price: product.price,
          count: cart[product.id]
        }));
        
        setCartProducts(cartProductsWithQuantity);
      } catch (error) {
        console.error('Failed to fetch cart products:', error);
        setCartProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCartProducts();
  }, [cart]);

  if (loading) {
    return <Loading />;
  }
  
  return(
    <div className="flex-grow mx-16 flex flex-col p-4">
      <CartList cartProducts={cartProducts}/>
      <CartTotal/>
    </div>
  )
}