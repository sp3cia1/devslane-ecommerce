import { withFormik } from "formik";
import { Link } from "react-router";
import * as Yup from "yup";
import Input from "./Input";

function resetPasswordApi(values) {
  console.log("Sending password reset email to:", values.email);
}

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Email is required"),
});

const initialValues = {
  email: "",
};

function ForgotPasswordForm({
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
      <div className="text-center mb-6">
        <h2 className="text-white text-2xl font-semibold mb-2">Reset Password</h2>
        <p className="text-gray-300 text-sm">
          Enter your email address and we'll send you a link to reset your password
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="mb-4">
          <Input
            id="email"
            label="Recovery Email"
            name="email"
            values={values.email}
            error={errors.email}
            placeholder="RECOVERY EMAIL"
            touched={touched.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            type="email"
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

const formikHOC = withFormik({
  validationSchema: ForgotPasswordSchema,
  initialValues: initialValues,
  handleSubmit: resetPasswordApi,
});

const ForgotPasswordFormWithFormikHOC = formikHOC(ForgotPasswordForm);

export default ForgotPasswordFormWithFormikHOC;