import * as Yup from "yup";

// export default Yup.object().shape({
//   vCodeGroup: Yup.boolean().oneOf([false], "All values are required"),
//   // the values below don't need to display an error message, so we don't set one
//   value1: Yup.string().required(),
//   value2: Yup.string().required(),
//   value3: Yup.string().required(),
//   value4: Yup.string().required(),
//   value5: Yup.string().required(),
//   value6: Yup.string().required(),
//   value7: Yup.string().required()
// });

export default Yup.object().shape({
  vCodeGroup: Yup.boolean().oneOf([false], "All values are required"),
  value1: Yup.string()
    .trim()
    .required(),
  value2: Yup.string()
    .trim()
    .required(),
  value3: Yup.string()
    .trim()
    .required(),
  value4: Yup.string()
    .trim()
    .required(),
  value5: Yup.string()
    .trim()
    .required(),
  value6: Yup.string()
    .trim()
    .required(),
  value7: Yup.string()
    .trim()
    .required()
});
