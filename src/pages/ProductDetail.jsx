import { Link, useParams } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import { getProductById } from "../api";
import Loading from "../components/Loading";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return (
      <div className="grow flex flex-col max-w-6xl lg:min-w-5xl mx-auto my-6 bg-white rounded-lg p-6">
        <div className="flex justify-center items-center h-64">
          <div className="text-xl text-primary-dark">Product not found</div>
        </div>
      </div>
    );
  }

  return(
    <div className="p-4 my-6 bg-white md:flex grow max-w-5xl lg:min-w-5xl mx-auto">
      <div className="w-full mb-4 md:hidden">
        <Link to="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
          <FaArrowLeft />
          <span>Back to Products</span>
        </Link>
      </div>
      <div className ="w-full h-1/2 md:w-1/2 p-4">
        <img alt={product.title}
             src={product.thumbnail}
             className="h-full w-full object-cover"
        />
      </div>
      <div className="md:w-1/2 p-4">
        <div className="hidden md:block mb-4">
          <Link to="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
            <FaArrowLeft />
            <span>Back to Products</span>
          </Link>
        </div>
        <p className="text-4xl">
          {product.title}
        </p>
        <p className="text-2xl py-4 font-bold">
          ${product.price}
        </p>
        <p className="">
          {product.description}
        </p>
        <div className="py-8">
          <input type="number"
            value = '1'
            className="border w-16 px-1 border-gray-400 py-1"
          />
          <button className="mx-1 rounded bg-orange-600 px-8 py-1 text-white cursor-pointer hover:bg-orange-700">
            Add To Cart
          </button>
        </div>
        
        <div className="flex justify-between mt-8 pt-4 border-t border-gray-200">
          <Link 
            to={`/product/${parseInt(id) - 1}`}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 cursor-pointer"
          >
            <FaArrowLeft className="text-sm" />
            <span>Previous</span>
          </Link>
          
          <Link 
            to={`/product/${parseInt(id) + 1}`}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 cursor-pointer"
          >
            <span>Next</span>
            <FaArrowLeft className="text-sm rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}