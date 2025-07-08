export default function CartTotal() {
  return(
      <div className="border border-gray-300 mt-8 w-1/2 self-end">
        <div className="flex bg-gray-400 border-b border-gray-300 py-4 px-4">
          <p className="w-1/2 text-start font-semibold text-xl">
            Cart Totals
          </p>
        </div>
        <div className="flex flex-col px-4 py-2">
          <div className="flex font-semibold text-lg border-b border-gray-300 p-3">
            <p className="w-1/2 ">Subtotal</p>
            <p>$166.00</p>
          </div>
          <div className="flex font-semibold text-lg border-b border-gray-300 p-3">
            <p className="w-1/2 ">Total</p>
            <p>$166.00</p>
          </div>          

        </div>
        <div className="p-4">
          <button className="w-full p-3 text-lg text-white bg-red-500 rounded-sm cursor-pointer hover:bg-red-600">Proceed To Checkout</button>
        </div>
      </div>
  )
}