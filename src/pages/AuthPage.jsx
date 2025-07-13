import { Link, useParams, Navigate } from "react-router";

import ForgotPasswordForm from "../components/ForgotPasswordForm";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

export default function AuthPage() {
  const { authType } = useParams();

  const renderForm = () => {
    switch (authType) {
      case "login":
        return <LoginForm />;
      case "signup":
        return <SignupForm />;
      case "forgot-password":
        return <ForgotPasswordForm />;
      default:
        return <Navigate to="/auth/login" />;
    }
  };

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
