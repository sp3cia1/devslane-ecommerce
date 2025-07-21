import { Link } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { withAlertAndUser } from "../hoc";

function logout(setUser, setAlert){
  localStorage.removeItem("token");
  setUser(undefined);
  if (setAlert) {
    setAlert("Successfully logged out!", 'success');
  }
  //setting token invalid on server later
}

function Header({productCount, setAlert, user, setUser}){
  
  return(
    <div className="h-20 bg-white md:px-32 px-16 flex items-center justify-between shadow-sm">
      <Link to="/">
        <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-2000.png"
             className="h-12 md:h-16"  
             alt="Amazon Logo"
        />
      </Link>
      {user && <div className="flex gap-8 md:gap-16">
        <Link to="/cart" className="text-primary hover:text-blue-600 transition-colors relative">
          <FaShoppingCart className="md:text-4xl text-2xl" />
          {productCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-primary text-s font-bold rounded-full h-6 w-6 flex items-center justify-center">
              {productCount}
            </span>
          )}
        </Link>
        <IoLogOutOutline onClick={() => logout(setUser, setAlert)} className="md:text-4xl text-2xl text-primary cursor-pointer"/>
      </div>}
    </div>
  )
}

export default withAlertAndUser(Header);