import React from 'react';
import './OptionInput.css';

const OptionInput = (props) => {
  return (
    <>
      <div className="col-sm-9 mb-3 ">
        <label className="d-flex justify-content-between">{props.name}</label>
        <div className="input-group">
          <select
            className="form-select option-field"
            id="inputGroupSelect04"
            aria-label="Example select with button addon"
            onChange={props.onChange}
            value={props.value}
          >
            <option defaultValue="Hobi">{props.select}</option>
            <option value="Hobi">Hobi</option>
            <option value="Kendaraan">Kendaraan</option>
            <option value="Baju">Baju</option>
            <option value="Elektronik">Elektronik</option>
            <option value="Kesehatan">Kesehatan</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default OptionInput;
