import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Toast, Row, Col, Button } from "react-bootstrap";
import userImage from "../../../assets/user.jpg";
import "./ProductList.scss";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import { useDispatch } from 'react-redux'
import { makeStatusPreviewIdle } from '../../../redux/previewSlice'
import { makeStatusIdle } from "../../../redux/notifSlice";

const ProductList = ({ product, action }) => {
  const dispatch = useDispatch();
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  const imgStyle = {
    height: "100px",
    objectFit: "cover",
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);
  return (
    <>
      <div
        className="row justify-content-start g-1 row-cols-lg-3"
        data-aos="fade-up"
      >
        {action && (
          <Link to="/create" onClick={() => {
            dispatch(makeStatusPreviewIdle());
            dispatch(makeStatusIdle());
          }} style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <div className="col d-flex justify-content-center">
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
          </Link>
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
