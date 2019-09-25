import React, { createRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Field, ErrorMessage } from "formik";
import ValueInput from "./ValueInput";
import { baseValueData } from "./scripts/value-data";
import styles from "./styles.module.scss";

function ValueGroup(props) {
  const {
    legend,
    errors,
    touched,
    formikName: name,
    setFieldValue,
    setFieldTouched
  } = props;

  const verificationData = baseValueData.map(value => ({
    ...value,
    ref: createRef()
  }));

  const focusNextValue = dataId => {
    if (verificationData.length > dataId) {
      verificationData[dataId].ref.current.focus();
    }
  };

  // this effect runs whenever the dependencies update (in square brackets below)
  // see https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
  useEffect(() => {
    const errorsArr = errors ? Object.keys(errors) : null;
    const touchedArr = touched ? Object.keys(touched) : null;

    let arrOverlap = errorsArr.filter(item => touchedArr.includes(item));
    if (arrOverlap.includes(name)) arrOverlap.splice(name, 1);

    if (arrOverlap.length > 0) {
      setFieldValue(name, true);
      setFieldTouched(name, true);
    } else {
      setFieldValue(name, false);
    }
  }, [touched, errors, name, setFieldValue, setFieldTouched]);

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{legend}</legend>
      <div className={styles.inputGroup}>
        {verificationData.map(data => (
          <Field
            name={data.name}
            key={data.id}
            // we're using formik's render instead of component so we can pass refs to the fields
            render={props => (
              <ValueInput
                {...props}
                ref={data.ref}
                label={data.label}
                dataId={data.id}
                focusNextValue={focusNextValue}
              />
            )}
          />
        ))}
      </div>
      <ErrorMessage
        name={name}
        render={msg => <div className={styles.errorLabel}>{msg}</div>}
      />
    </fieldset>
  );
}

ValueGroup.propTypes = {
  legend: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  formikName: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired
};

export default ValueGroup;
