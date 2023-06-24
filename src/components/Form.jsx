import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import "../components/Form.css";

import { useDispatch } from "react-redux";
// import { useGlobalContext } from "../App";
import { addUser } from "../features/users/userSlice";
const initialValues = {
  name: "",
  email: "",
  ph_num: "",
};
const Form = () => {
  const dispatch = useDispatch();
  //   const { users } = useGlobalContext();
  const SubmitHandle = () => {
    if (
      values.name.length > 0 &&
      values.ph_num.length > 0 &&
      values.email.length > 0
    ) {
      const id = Date.now();
      const newObj = { ...values, id: id };
      dispatch(addUser(newObj));
    } else {
      alert("Please Fill the Details Properly");
    }
    // const id = Date.now();
    // const newObj = { ...values, id: id };
    // dispatch(addUser(newObj));
    // users.push(values);
    // console.log(values);
    // SetUser((users) => [...users, values]);
    // console.log(users);
  };

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        // console.log(values);
        action.resetForm();
      },
    });

  return (
    <div>
      <div className="Form">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h1 className="heading">Login</h1>
            <div className="input">
              <label htmlFor="name" className="input_label">
                Name:
              </label>
              <input
                className="input_field"
                type="text"
                name="name"
                id="name"
                placeholder="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="errors">{errors.name}</p>
              ) : null}
            </div>
            <div className="input">
              <label htmlFor="email" className="input_label">
                Email:
              </label>
              <input
                className="input_field"
                type="email"
                name="email"
                id="email"
                placeholder="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="errors">{errors.email}</p>
              ) : null}
            </div>
            <div className="input">
              <label htmlFor="ph_num" className="input_label">
                Phone Number:
              </label>
              <input
                className="input_field"
                type="text"
                name="ph_num"
                id="ph_num"
                placeholder="Phone Number"
                value={values.ph_num}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.ph_num && touched.ph_num ? (
                <p className="errors">{errors.ph_num}</p>
              ) : null}
            </div>
            <button type="submit" onClick={SubmitHandle} className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
