import React from "react";

const Button = (props) => {
  return (
    <div className="col-4 mb-5 button-size d-flex justify-content-start ">
      <button className={`btn border-radius ${props.color}`}>
        {props.name}
      </button>
    </div>
  );
};

export default Button;
