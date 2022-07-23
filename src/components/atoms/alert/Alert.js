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
      className="alert alert-dismissible fade show alert1 mt-2"
      style={{
        backgroundColor: color[props.color],
        color: textColor[props.color],
      }}
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
