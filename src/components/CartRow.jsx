import { memo, useMemo, useState } from "react";

function CartRow({ product, handleRemovalFromCart, setCartUpdated, setLocalCart }) {
  const [localQuantity, setLocalQuantity] = useState(product.count);
  const subtotal = useMemo(
    () => (product.price * product.count).toFixed(2),
    [product.price, product.count]
  );

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setLocalQuantity(newQuantity);

    if (newQuantity !== product.count) {
      setCartUpdated(true);
      setLocalCart(prev => {
        return {...prev, [product.id]: newQuantity}
      })
    } else {
      setCartUpdated(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row border-b border-gray-300 py-4 bg-white">
      <div className="md:w-1/2 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-row-reverse md:flex-row justify-evenly items-center">
          <button
            className="text-sm border border-gray-400 text-gray-400 rounded-full h-fit px-3 py-1 cursor-pointer hover:bg-gray-100 hover:text-primary"
            onClick={() => handleRemovalFromCart(product.id)}
          >
            X
          </button>
          <img className="w-1/3" src={product.thumbnail} alt={product.title} />
        </div>
        <h4 className="self-center text-primary text-lg font-semibold">
          {product.title}
        </h4>
      </div>
      <div className="w-full md:w-1/2 flex justify-around items-center">
        <div className="flex flex-col justify-center md:flex-row">
          <p className="font-bold md:invisible">Price</p>
          <p className="font-semibold">${product.price}</p>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row">
          <p className="font-bold md:invisible">Qty.</p>
          <input
            value={localQuantity}
            onChange={handleQuantityChange}
            type="number"
            min={1}
            className="bg-gray-100 px-4 py-1 w-1/3 "
          />
        </div>
        <div className="flex flex-col justify-center md:flex-row">
          <p className="font-bold md:invisible">Total</p>
          <p className="font-semibold">${subtotal}</p>
        </div>
      </div>
    </div>
  );
}

export default memo(CartRow);
