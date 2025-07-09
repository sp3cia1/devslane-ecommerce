export default function CartRow(){
  return(
     <div className="flex border-b border-gray-300 py-4 bg-white">
        <div className="w-1/2 flex">
          <div className="w-1/2 flex justify-evenly items-center">
            <button className="border border-gray-400 text-gray-400 rounded-full h-fit px-3 py-1 cursor-pointer hover:bg-gray-100 hover:text-red-500">X</button>
            <img className="w-1/3" src="https://codeyogi.io/coffee-mug.jpeg"/>
          </div>
          <h4 className="self-center text-red-500 text-lg font-semibold">Black Printed Coffee Mug</h4>
        </div>
        <div className="w-1/2 flex justify-around items-center">
          <p className="font-semibold">$15.00</p>
          <input value="2" type="number"  className="w-1/12 px-3 py-1"/>
          <p className="font-semibold">$30.00</p>
        </div>
      </div>
    )
}