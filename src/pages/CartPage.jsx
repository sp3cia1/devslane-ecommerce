import { useState, useEffect, useMemo } from "react";
import CartList from "../components/CartList"
import CartTotal from "../components/CartTotal"
import { getProductById } from "../api";
import Loading from "../components/Loading";

export default function CartPage({cart}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const cartProductsWithQuantity = useMemo(() => 
    products.map(product => ({
      id: product.id,
      title: product.title,
      thumbnail: product.thumbnail,
      price: product.price,
      count: cart[product.id]
    })),
    [products, cart]
  );

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        setLoading(true);
      
        const productIds = Object.keys(cart);
        
        if (productIds.length === 0) {
          setProducts([]);
          setLoading(false);
          return;
        }

        const productPromises = productIds.map(id => getProductById(id));
        const fetchedProducts = await Promise.all(productPromises);
        
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Failed to fetch cart products:', error);
        setProducts([]);
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
    <div className="flex-grow mx-8 md:mx-16 flex flex-col px-2 py-4 md:p-4">
      <CartList cartProducts={cartProductsWithQuantity}/>
      <CartTotal/>
    </div>
  )
}