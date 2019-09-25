import React from "react";
import ReactDOM from "react-dom";
import FormikForm from "./FormikForm/index";
import "./styles.scss";

function App() {
  return (
    <div className="container">
      <h1>Formik Group Validation</h1>
      <p>
        The parent element displays an error if any children are invalid.
        <br />
        Also includes number-only entry and auto focus changing.
      </p>
      <FormikForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
