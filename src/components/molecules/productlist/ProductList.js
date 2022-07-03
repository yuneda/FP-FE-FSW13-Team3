import React from "react";
import { useState, useEffect } from "react";
import { Toast, Row, Col, Button } from "react-bootstrap";
import userImage from "../../../assets/user.jpg";
import "./ProductList.css";
import axios from "axios";

const ProductList = ({ product, action }) => {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  const imgStyle = {
    height: "100px",
    objectFit: "cover",
  };
  return (
    <>
      <div className="row justify-content-start g-1 row-cols-lg-3">
        {action && (
          <div className="col">
            <label htmlFor="file-upload" className="file-upload">
              <div className="fileUploadButton">
                <input
                  id="file-upload"
                  type="file"
                  // accept="image/x-png, image/jpeg"
                  accept="image/*"
                  style={{
                    display: "none",
                  }}
                />
                <div className="text-center mt-5">
                  <i className="fa-solid fa-plus mt-4"></i>
                  <div>Tambah Produk</div>
                </div>
              </div>
            </label>
          </div>
        )}
        {product.map((data, index) => {
          return (
            <div className="col" key={index}>
              <div className="card p-2">
                <img
                  src={data.image[0]}
                  style={imgStyle}
                  className="img-fluid"
                />
                <p className="product-title mb-0">{data.product_name}</p>
                <p className="desc mb-0">{data.category}</p>
                <p className="price">
                  {Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(data.product_price)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
