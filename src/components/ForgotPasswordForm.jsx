import { useFormik } from "formik";
import { Link } from "react-router";
import * as Yup from "yup";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Email is required"),
});

export default function ForgotPasswordForm() {
  function resetPasswordApi(values) {
    console.log("Sending password reset email to:", values.email);
  }

  const {
    handleSubmit,
    values,
    handleChange,
    touched,
    handleBlur,
    dirty,
    errors,
    isValid
  } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit: resetPasswordApi,
  });

  return (
    <div>
      <div className="text-center mb-6">
        <h2 className="text-white text-2xl font-semibold mb-2">Reset Password</h2>
        <p className="text-gray-300 text-sm">
          Enter your email address and we'll send you a link to reset your password
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="mb-4">
          <label htmlFor="email" className="sr-only">
            Recovery Email
          </label>
          <input
            id="email"
            placeholder="RECOVERY EMAIL"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            name="email"
            type="email"
            required
            className="border rounded-md border-white text-white p-4 text-sm w-80 bg-transparent placeholder-gray-300"
          />
          {touched.email && errors.email && values.email &&(
            <div className="text-red-300 text-sm mt-1">{errors.email}</div>
          )}
        </div>

        <div className="mt-4">
          <button
            type="submit"
            disabled={!dirty || !isValid}
            className={`text-blue-800 bg-white border rounded-sm p-2 font-semibold drop-shadow-lg w-full ${
              !dirty || !isValid
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer hover:bg-gray-100"
            }`}
          >
            RESET PASSWORD
          </button>
        </div>
      </form>
      
      <p className="text-white text-center text-lg mt-6">
        <Link to="/auth/login" className="font-bold hover:underline">
          ← Back to Sign In
        </Link>
      </p>
    </div>
  );
}