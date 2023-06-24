import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import "../components/UserForm.css";

import { useDispatch, useSelector } from "react-redux";

import { editUser } from "../features/users/userSlice";
import { closeModal, openModal } from "../features/modal/modalSlice";
const initialValues = {
  name: "",
  email: "",
  ph_num: "",
};
const Form = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((store) => {
    return store.modal;
  });
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(id);
        values = { ...values, id: id };
        action.resetForm();
        dispatch(editUser({ values }));
        dispatch(closeModal());
      },
    });

  return (
    <div>
      <div className="Form">
        <div className="container">
          <form onSubmit={handleSubmit}>
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
                Number:
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
            <div className="btn-container">
              {" "}
              <button
                type="submit"
                className="btn-s btn clear-btn"
                onClick={(e) => {}}
              >
                Submit
              </button>
              <button
                className=" btn clear-btn"
                onClick={() => {
                  dispatch(closeModal());
                }}
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
