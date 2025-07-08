import Card from '../components/Card'

export default function ProductList({products, searchProducts, onSort}){

  return(
    <div className="grow flex flex-col max-w-5xl lg:min-w-5xl mx-auto my-6 bg-white rounded-lg p-6">
      {/* <div className="bg-white rounded-lg p-6"> */}
        <div className="flex justify-between mb-6 gap-4">
          <input className='border bg-gray-100 w-1/2 md:w-2/3 px-4' placeholder="Find your favourite" onChange={(e) =>searchProducts(e.target.value)}/>

          <select className="border border-gray-300 rounded px-3 py-2 text-sm bg-white min-w-40" onChange={(e) => onSort(e.target.value)}>
            <option value="default">Default sorting</option>
            <option value="title">Sort by title</option>
            <option value="price-low-high">Sort by price: low to high</option>
            <option value="price-high-low">Sort by price: high to low</option>
          </select>

        </div>
        
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => 
              <Card key={index} product={product}/>
          )}
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 bg-red-500 text-white rounded text-sm font-medium">1</button>
            <button className="w-8 h-8 border border-gray-300 text-gray-700 rounded text-sm font-medium hover:bg-gray-50">2</button>
            <button className="w-8 h-8 border border-gray-300 text-gray-700 rounded text-sm font-medium hover:bg-gray-50">→</button>
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}