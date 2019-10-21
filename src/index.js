import React from 'react';
import ReactDOM from 'react-dom';
import FormikForm from './FormikForm/index';
import github from './github.svg';
import './styles.scss';

function App() {
  return (
    <div className='container'>
      <h1>Formik Group Validation</h1>
      <a
        href='https://github.com/mocasalter/formik-fieldset-validation'
        className='ghLink'
      >
        <img src={github} alt='Github Logo' />
        <span className='visuallyHidden'>View on github</span>
      </a>
      <p>
        The parent element displays an error if any of the children are invalid.
      </p>
      <p>
        You're also limited to entering only number characters, a single
        character for each input and the focus changes after entry.
      </p>
      <FormikForm />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
