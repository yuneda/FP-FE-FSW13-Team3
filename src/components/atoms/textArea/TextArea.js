import React from 'react';
import Form from 'react-bootstrap/Form';

const TextArea = (props) => {
  return (
    <>
      <div className="col-9" as="textarea">
        <label className="d-flex justify-content-between">{props.name}</label>
        <div className="input-group mb-3">
          <Form.Control
            as={props.as}
            rows={3}
            type={props.type}
            className="border-radius form-control"
            placeholder={props.placeholder}
            aria-label="Username"
            aria-describedby="basic-addon1"
            autoComplete="off"
            onChange={props.onChange}
            value={props.value}
          />
        </div>
      </div>
    </>
  );
};

export default TextArea;
