import { Link } from "react-router";
import { FaShoppingCart } from "react-icons/fa";

export default function Header({productCount}){
  return(
    <div className="h-20 bg-white md:px-32 px-16 flex items-center justify-between shadow-sm">
      <Link to="/">
        <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-2000.png"
             className="h-12 md:h-16"  
             alt="Amazon Logo"
        />
      </Link>
      <Link to="/cart" className="text-primary hover:text-blue-600 transition-colors relative">
        <FaShoppingCart className="md:text-4xl text-2xl" />
        {productCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-primary text-s font-bold rounded-full h-6 w-6 flex items-center justify-center">
            {productCount}
          </span>
        )}
      </Link>
    </div>
  )
}