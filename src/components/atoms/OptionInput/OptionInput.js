import React from "react";
import "./OptionInput.css";

const OptionInput = (props) => {
  return (
    <>
      <div className="col-9 mb-3 ">
        <label className="d-flex justify-content-between">{props.name}</label>
        <div className="input-group">
          <select
            className="form-select option-field"
            id="inputGroupSelect04"
            aria-label="Example select with button addon"
          >
            <option defaultValue="1">{props.select}</option>
            <option value="1">{props.value1}</option>
            <option value="2">{props.value2}</option>
            <option value="3">{props.value3}</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default OptionInput;
