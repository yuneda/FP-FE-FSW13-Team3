import React from 'react';
import './InputForm.css';

const InputForm = ({ ...props }) => {
  return (
    <div className="col-9">
      <label className="d-flex justify-content-between">{props.name}</label>
      <div className="input-group mt-2 mb-3 input-form">
        <input
          {...props}
          // type={props.type}
          className="border-radius form-control"
          // placeholder={props.placeholder}
          aria-label="Username"
          aria-describedby="basic-addon1"
          autoComplete="off"
          // value={props.value}
          // onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default InputForm;
