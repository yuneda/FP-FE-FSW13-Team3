import React from "react";
import "./Alert.scss";

const MyAlert = (props) => {
  const color = {
    success: "#73CA5C",
    warning: "#ffc107",
    danger: "#ff0000",
  };
  const textColor = {
    success: "#ffffff",
    warning: "#ffffff",
    danger: "#ffffff",
  };

  return (
    <div
      // className="alert col-4 ms-5 alert-success alert-dismissible fade show alert1 mt-2"
      className="alert alert-dismissible fade show alert1 mt-2"
      // className="alert alert-primary"
      style={{
        backgroundColor: color[props.color],
        color: textColor[props.color],
      }}
      role="alert"
    >
      {/* <div className="spinner-border text-light me-2" role="status"></div> */}
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
