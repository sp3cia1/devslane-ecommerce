import { withFormik } from "formik";
import { Link } from "react-router";
import * as Yup from "yup";
import Input from "./Input";

function loginApi(values) {
  console.log("Sending Data", values.username, values.password);
}

const LoginSchema = Yup.object().shape({
  username: Yup.string().min(4).required(),
  password: Yup.string().min(8).required(),
});

const initialValues = {
  username: "",
  password: "",
};

function LoginForm({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  dirty,
  isValid
}) {
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="mb-4">
          <Input
            id="username"
            label="Username"
            name="username"
            values={values.username}
            error={errors.username}
            placeholder="USERNAME"
            touched={touched.username}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            type="text"
          />
        </div>
        <div className="">
          <Input
            id="password"
            label="Password"
            name="password"
            values={values.password}
            error={errors.password}
            placeholder="PASSWORD"
            touched={touched.password}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            type="password"
          />
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
          <Link
            to="/auth/forgot-password"
            className="text-white self-end hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
      </form>
      <p className="text-white text-center text-lg mt-4">
        Dont have an account?
        <Link to="/auth/signup" className="font-bold hover:underline">
          {" "}
          Sign Up
        </Link>
      </p>
    </div>
  );
}

const formikHOC = withFormik({
  validationSchema: LoginSchema,
  initialValues: initialValues,
  handleSubmit: loginApi,
});

const LoginFormWithFormikHOC = formikHOC(LoginForm);

export default LoginFormWithFormikHOC;
