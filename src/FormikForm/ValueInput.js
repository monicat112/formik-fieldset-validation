import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "formik";
import classNames from "classnames";
import valueIsInArr from "./scripts/value-is-in-arr";
import styles from "./styles.module.scss";

// give this component access to the ref that its parent passed down
const ValueInput = forwardRef((props, ref) => {
  const {
    form: { errors, touched, handleChange },
    field: { name },
    field,
    label,
    dataId,
    focusNextValue
  } = props;

  const inputClassNames = classNames({
    [styles.input]: true,
    [styles.inputError]: errors[name] && touched[name]
  });

  let navKeyWasPressed = false;

  const handleValueChange = e => {
    const numberRegex = /^\d+$/;

    if (navKeyWasPressed) {
      handleChange(e);
    } else if (e.target.value.length < 2) {
      if (numberRegex.test(e.target.value)) {
        handleChange(e);
        focusNextValue(dataId);
      }
    }
  };

  const handleKeyDown = e => {
    // prettier-ignore
    const keyCodesForNavigating = [
        8,9,16,27,35,36,37,38,39,40,45,46
    ];
    navKeyWasPressed = valueIsInArr(
      e.nativeEvent.keyCode,
      keyCodesForNavigating
    );
  };

  return (
    <div className={styles.inputWrap}>
      <label htmlFor={name} className={styles.visuallyHidden}>
        {label}
      </label>
      <input
        {...field}
        id={name}
        ref={ref}
        className={inputClassNames}
        onChange={handleValueChange}
        onKeyDown={handleKeyDown}
      />

      <ErrorMessage name={name} render={msg => <div>{msg}</div>} />
    </div>
  );
});

ValueInput.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  dataId: PropTypes.number.isRequired,
  focusNextValue: PropTypes.func.isRequired
};

ValueInput.displayName = "forwardRef(ValueInput)";

export default ValueInput;
