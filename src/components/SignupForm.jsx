import { useFormik } from "formik";
import { Link } from "react-router";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().min(2, "Full name must be at least 2 characters").required("Full name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  username: Yup.string().min(4, "Username must be at least 4 characters").required("Username is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Passwords must match")
    .required("Please confirm your password"),
});

export default function SignupForm() {
  function signupApi(values) {
    console.log("Sending Data", values);
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
      fullName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: SignupSchema,
    onSubmit: signupApi,
  });

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="mb-4">
          <label htmlFor="fullName" className="sr-only">
            Full Name
          </label>
          <input
            id="fullName"
            placeholder="FULL NAME"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="fullName"
            type="text"
            required
            className="border rounded-md border-white text-white p-4 text-sm w-80 bg-transparent placeholder-gray-300"
          />
          {touched.fullName && errors.fullName && (
            <div className="text-red-300 text-sm mt-1">{errors.fullName}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            placeholder="EMAIL"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            name="email"
            type="email"
            required
            className="border rounded-md border-white text-white p-4 text-sm w-80 bg-transparent placeholder-gray-300"
          />
          {touched.email && errors.email && (
            <div className="text-red-300 text-sm mt-1">{errors.email}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <input
            id="username"
            placeholder="USERNAME"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            name="username"
            type="text"
            required
            className="border rounded-md border-white text-white p-4 text-sm w-80 bg-transparent placeholder-gray-300"
          />
          {touched.username && errors.username && (
            <div className="text-red-300 text-sm mt-1">{errors.username}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            placeholder="PASSWORD"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            name="password"
            type="password"
            required
            className="border rounded-md border-white text-white p-4 text-sm w-80 bg-transparent placeholder-gray-300"
          />
          {touched.password && errors.password && (
            <div className="text-red-300 text-sm mt-1">{errors.password}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="sr-only">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            placeholder="CONFIRM PASSWORD"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            name="confirmPassword"
            type="password"
            required
            className="border rounded-md border-white text-white p-4 text-sm w-80 bg-transparent placeholder-gray-300"
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <div className="text-red-300 text-sm mt-1">{errors.confirmPassword}</div>
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
            SIGN UP
          </button>
        </div>
      </form>
      
      <p className="text-white text-center text-lg mt-4">
        Already have an account? 
        <Link to="/auth/login" className="font-bold"> Login</Link>
      </p>
    </div>
  );
}