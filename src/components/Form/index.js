import React from 'react';

import './Form.scss';

const Form = ({ children, ...rest }) => {
  return (
    <form className='form' {...rest}>
      {children}
    </form>
  );
};

Form.Group = ({ children, ...rest }) => {
  return (
    <div className='form-group' {...rest}>
      {children}
    </div>
  );
};

Form.Label = ({ children, ...rest }) => {
  return (
    <label className='form-label' {...rest}>
      {children}
    </label>
  );
};

Form.Input = (props) => {
  const { label, ...rest } = props;

  return (
    <>
      {label && <Form.Label>{label}</Form.Label>}
      <input className='form-input' {...rest} />
    </>
  );
};

export default Form;
