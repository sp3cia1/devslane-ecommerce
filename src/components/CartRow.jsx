import { memo, useMemo } from "react";

function CartRow({product}){
  const subtotal = useMemo(() => 
    (product.price * product.count).toFixed(2),
    [product.price, product.count]
  );

  return(
     <div className="flex flex-col md:flex-row border-b border-gray-300 py-4 bg-white">
        <div className="md:w-1/2 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-row-reverse md:flex-row justify-evenly items-center">
            <button className="text-sm border border-gray-400 text-gray-400 rounded-full h-fit px-3 py-1 cursor-pointer hover:bg-gray-100 hover:text-primary">X</button>
            <img className="w-1/3" src={product.thumbnail} alt={product.title}/>
          </div>
          <h4 className="self-center text-primary text-lg font-semibold">{product.title}</h4>
        </div>
        <div className="w-full md:w-1/2 flex justify-around items-center">
          <div>
            <p  className="font-bold md:invisible">Price</p>
            <p className="font-semibold">${product.price}</p>
          </div>
          <div>
            <p  className="font-bold md:invisible">Qty.</p>
            <p className="w-1/12 px-3 py-1">{product.count}</p>
          </div>
          <div>            
            <p className="font-bold md:invisible">Total</p>
            <p className="font-semibold">${subtotal}</p>
          </div>
        </div>
      </div>
    )
}

export default memo(CartRow);