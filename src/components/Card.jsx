export default function Card(props){
  const {sale} = props
  return(
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6 ">
      
      <div className="relative mb-4">
        <img alt="product image"
             src="https://codeyogi.io/coffee-mug.jpeg"
             className="w-full rounded-md"
        />
        {sale && (<p class="bg-red-500 rounded-full absolute right-[-10px] top-[-20px] py-4 px-2 text-xl ">
        Sale!
        </p>)}
      </div>
      
      <div className="space-y-2">
        <p className="text-xs text-gray-500 uppercase tracking-wide">
          Mugs
        </p>
        <h3 className="text-sm font-medium text-gray-900">
          Black Printed Coffee Mug
        </h3>
        <div className="flex items-center space-x-1">
          <div className="flex">
            <span className="text-gray-300">☆☆☆☆☆</span>
          </div>
        </div>
        <p className="text-lg font-semibold text-gray-900">$15.00</p>
      </div>
    </div>
  )
}