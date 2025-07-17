import { Link, useParams, Navigate } from "react-router";

import ForgotPasswordForm from "../components/ForgotPasswordForm";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { UserContext } from "../App";
import { useContext } from "react";

export default function AuthPage() {
  const context = useContext(UserContext);
  
  // handle case when context is undefined (during hot reload)
  if (!context) {
    return null;
  }
  
  const { user, setUser } = context;
  const { authType } = useParams();

  const renderForm = () => {
    switch (authType) {
      case "login":
        return <LoginForm setUser={setUser}/>;
      case "signup":
        return <SignupForm setUser={setUser} />;
      case "forgot-password":
        return <ForgotPasswordForm />;
      default:
        return <Navigate to="/auth/login" />;
    }
  };

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div
      className="grow bg-cover bg-center bg-blue-800 flex flex-col justify-center items-center min-h-screen"
      style={{ backgroundImage: `url(/BG.svg)` }}
    >
      <img className="h-20 mb-6" src="/cart.svg" alt="" />
      <div className="mt-2">{renderForm()}</div>
    </div>
  );
}
