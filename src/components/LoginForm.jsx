import { useFormik } from "formik";
import { Link } from "react-router";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  username: Yup.string().min(4).required(),
  password: Yup.string().min(8).required(),
});

export default function LoginForm() {
  function loginApi(values) {
    console.log("Sending Data", values.username, values.password);
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
      username: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: loginApi,
  });

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="mb-4">
          <label htmlFor="username" className="sr-only">
            username
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
          {touched.username && errors.username && values.username && (
            <div className="text-red-300 text-sm mt-1">{errors.username}</div>
          )}
        </div>
        <div className="">
          <label htmlFor="password" className="sr-only">
            password
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
          {touched.password && errors.password && values.password && (
            <div className="text-red-300 text-sm mt-1">{errors.password}</div>
          )}
        </div>

        <div className="mt-4 flex flex-col gap-1">
          <button
            type="submit"
            disabled={!dirty || !isValid}
            className={`text-blue-800 bg-white border rounded-sm p-2 font-semibold drop-shadow-lg w-full ${
              !dirty || !isValid
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer hover:bg-gray-100"
            }`}
          >
            LOGIN
          </button>
          <Link to="/auth/forgot-password" className="text-white self-end hover:underline">
            Forgot Password?
          </Link>
        </div>
        
      </form>
      <p className="text-white text-center text-lg mt-4">
        Dont have an account? 
        <Link to="/auth/signup" className="font-bold hover:underline"> Sign Up</Link>
      </p>
    </div>
  );
}
