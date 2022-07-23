import React from "react";

const UploadImage = ({ ...props }) => {
  return (
    <div className="col-sm-9">
      <div className="col-sm-9 justify-content-start d-flex">
        <label>{props.name}</label>
      </div>
      <div className="col-sm-9 justify-content-start d-flex mb-5 input-file">
        <label
          htmlFor="file-upload"
          className="product-upload-image px-5 py-5 "
        >
          <div className="">
            <input
              {...props}
              id="file-upload"
              accept="image/*"
              style={{
                display: "none",
              }}
              multiple
            />
            <div className="text-center">
              <i className="fa-solid fa-plus fa-xl"></i>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default UploadImage;
