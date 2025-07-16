import { useState } from "react"
import CartRow from "./CartRow"

export default function CartList({cartProducts, handleRemovalFromCart, cart, setCart}){
  const [cartUpdated, setCartUpdated] = useState(false)
  const [localCart, setLocalCart] = useState({...cart})
  console.log("local cart ", localCart)

  const handleUpdateCart = () => {
    console.log("function called")
    setCart(localCart);
    setCartUpdated(false);
  };

  return(
    <div className="border border-gray-300">
      <div className="flex bg-gray-400 border-b border-gray-300 py-4">
        <p className="w-full text-xl md:w-1/2 md:text-base text-center">
          Products
        </p>
        <div className="invisible w-0 md:visible md:w-1/2 flex justify-around ">
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
      </div>

      <div>
        {cartProducts.map(product => (
          <CartRow 
            key={product.id} 
            product={product}
            handleRemovalFromCart={handleRemovalFromCart}
            setCartUpdated={setCartUpdated}
            setLocalCart={setLocalCart}
          />
        ))}
      </div>


      <div className="flex flex-col gap-2 md:flex-row border-t border-gray-300 px-4 py-2 justify-between bg-white items-center">
        <div className="flex text-lg md:text-base">
          <input className="border px-1 py-0 text- md:px-2 md:py-1 w-1/2 mr-2 md:mr-3" placeholder="Coupon Code"/>
          <button className="px-8 py-1 text-white bg-primary rounded-sm w-1/2 cursor-pointer hover:bg-primary-dark">APPLY COUPON</button>
        </div>

        <button onClick={handleUpdateCart} className={`text-lg md:text-base px-8 py-1 text-white bg-primary rounded-sm cursor-pointer hover:bg-primary-dark ${
          cartUpdated ? " cursor-pointer hover:bg-gray-100" : " opacity-50 cursor-not-allowed"
        }`}>UPDATE CART</button>
      </div>
      
    </div>
  )
}