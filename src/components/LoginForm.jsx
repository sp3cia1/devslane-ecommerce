import { withFormik } from "formik";
import { Link } from "react-router";
import * as Yup from "yup";
import Input from "./Input";
import axios from "axios";
import { withAlert } from "../hoc";


async function loginApi(values, bag) {
  console.log(bag)
  try{
    const response = await axios.post("https://myeasykart.codeyogi.io/login", {
      email: values.email,
      password:values.password
    })
    const {user, token} = response.data;
    localStorage.setItem("token", token);
    bag.props.setUser(user);

    if (bag.props.setAlert) {
      bag.props.setAlert(`Welcome back, ${user.full_name || user.email}!`, 'success');
    }
  } catch(error){
    console.log("error logging in ", error)

    if (bag.props.setAlert) {
      const errorMessage = error.response?.data?.message || 'Login failed. Please check your credentials.';
      bag.props.setAlert(errorMessage, 'danger');
    }
  }
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(8).required(),
});

const initialValues = {
  email: "",
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
            id="email"
            label="Email"
            name="email"
            values={values.email}
            error={errors.email}
            placeholder="EMAIL"
            touched={touched.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            type="email"
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

export default withAlert(LoginFormWithFormikHOC);
