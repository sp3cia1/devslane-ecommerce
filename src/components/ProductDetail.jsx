export default function ProductDetail() {
  return(
    <div className="p-4 md:flex grow max-w-5xl mx-auto">
      <div className ="w-full h-1/2 md:w-1/2 p-4">
        <img alt="mug image"
             src="https://codeyogi.io/coffee-mug.jpeg"
             className="h-full w-full object-cover"
        />
      </div>
      <div className="md:w-1/2 p-4">
        <p className="text-4xl">
          Black Printed Coffee Mug
        </p>
        <p className="text-2xl py-4 font-bold">
          $15.00
        </p>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.
        </p>
        <div className="py-8">
          <input type="number"
            value = '1'
            className="border w-16 px-1 border-gray-400 py-1"
          />
          <button className="mx-1 rounded bg-orange-600 px-8 py-1 text-white">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}