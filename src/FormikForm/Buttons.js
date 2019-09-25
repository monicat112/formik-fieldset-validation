import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

function Buttons({ successMsg, handleReset }) {
  return (
    <div className={styles.buttonGroup}>
      <button type="submit" className={styles.button}>
        Submit Number
      </button>
      {successMsg && (
        <button
          type="button"
          onClick={handleReset}
          className={styles.buttonSecondary}
        >
          Reset
        </button>
      )}
    </div>
  );
}

Buttons.propTypes = {
  successMsg: PropTypes.string,
  handleReset: PropTypes.func.isRequired
};

export default Buttons;
