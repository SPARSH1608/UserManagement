import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(3).max(25).required("Please Enter Your Name"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please Enter a Valid Email ID"),
  ph_num: Yup.string()
    .matches(/^\d{10}$/, "Please Enter a Valid 10-digit Phone Number")
    .required("Please Enter A Valid Phone Number"),
});
