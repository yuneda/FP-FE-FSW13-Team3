import React from "react";
import "./Alert.css";

const MyAlert = (props) => {
  return (
    <div
      className="alert col-4 ms-5 alert-success alert-dismissible fade show alert1 mt-2"
      role="alert"
    >
      {props.title}
      <button
        type="button"
        className="btn-close btn-close-white"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default MyAlert;
