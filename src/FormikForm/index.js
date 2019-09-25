import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import ValueGroup from "./ValueGroup";
import Buttons from "./Buttons";
import { valueDataFormik } from "./scripts/value-data";
import schema from "./scripts/schema";
import convertValuesToString from "./scripts/convert-values-to-string";

function FormikForm() {
  const [successMsg, setSuccessMsg] = React.useState(null);

  return (
    <Fragment>
      <Formik
        initialValues={{
          vCodeGroup: "",
          ...valueDataFormik,
          role: "",
          phone: "",
          password: ""
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          const valueString = convertValuesToString(values);
          setSuccessMsg(`${valueString} is a great number!`);
          actions.setSubmitting(false);
        }}
        onReset={() => {
          setSuccessMsg(null);
        }}
        render={({
          errors,
          touched,
          setFieldValue,
          setFieldTouched,
          handleReset
        }) => (
          <Form>
            <ValueGroup
              legend="Enter your favorite 7 digit number"
              formikName="vCodeGroup"
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
              setFieldTouched={setFieldTouched}
            />
            {<p>{successMsg}</p>}
            <Buttons successMsg={successMsg} handleReset={handleReset} />
          </Form>
        )}
      />
    </Fragment>
  );
}

export default FormikForm;
