import { withFormik } from "formik";
import { Link } from "react-router";
import * as Yup from "yup";
import Input from "./Input";

function signupApi(values) {
  console.log("Sending Data", values);
}

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().min(2, "Full name must be at least 2 characters").required("Full name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  username: Yup.string().min(4, "Username must be at least 4 characters").required("Username is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Passwords must match")
    .required("Please confirm your password"),
});

const initialValues = {
  fullName: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

function SignupForm({
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
            id="fullName"
            label="Full Name"
            name="fullName"
            values={values.fullName}
            error={errors.fullName}
            placeholder="FULL NAME"
            touched={touched.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            type="text"
          />
        </div>

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

        <div className="mb-4">
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

        <div className="mb-4">
          <Input
            id="confirmPassword"
            label="Confirm Password"
            name="confirmPassword"
            values={values.confirmPassword}
            error={errors.confirmPassword}
            placeholder="CONFIRM PASSWORD"
            touched={touched.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            type="password"
          />
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
        <Link to="/auth/login" className="font-bold hover:underline"> Login</Link>
      </p>
    </div>
  );
}

const formikHOC = withFormik({
  validationSchema: SignupSchema,
  initialValues: initialValues,
  handleSubmit: signupApi,
});

const SignupFormWithFormikHOC = formikHOC(SignupForm);

export default SignupFormWithFormikHOC;