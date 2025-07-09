import CartRow from "./CartRow"

export default function CartList(){
  return(
    <div className="border border-gray-300">
      <div className="flex bg-gray-400 border-b border-gray-300 py-4">
        <p className="w-1/2 text-center">
          Product
        </p>
        <div className="w-1/2 flex justify-around ">
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
      </div>

      <div>
        <CartRow/>
        <CartRow/>
      </div>


      <div className="flex border-t border-gray-300 px-4 py-2 justify-between bg-white items-center">
        <div className="flex">
          <input className="border px-2 py-1 w-1/2 mr-3" placeholder="Coupon Code"/>
          <button className="px-8 py-1 text-white bg-primary rounded-sm w-1/2 cursor-pointer hover:bg-primary-dark">APPLY COUPON</button>
        </div>

        <button className="px-8 py-1 text-white bg-primary rounded-sm cursor-pointer hover:bg-primary-dark">UPDATE CART</button>
      </div>
      
    </div>
  )
}