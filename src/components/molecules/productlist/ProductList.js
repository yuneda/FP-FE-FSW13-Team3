import React from 'react';
import { useState } from 'react';
import { Toast, Row, Col, Button } from 'react-bootstrap';
import userImage from '../../../assets/user.jpg';

const ProductList = () => {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  const imgStyle = {
    height: '100px',
    objectFit: 'cover',
  };
  return (
    <>
      <div className="row justify-content-start g-1 row-cols-lg-3">
        <div className="col">
          <label htmlFor="file-upload" className="file-upload">
            <div className="fileUploadButton position-relative">
              <input
                className=""
                id="file-upload"
                type="file"
                accept="image/x-png, image/jpeg"
                style={{
                  opacity: '0',
                }}
              />
              <div
                className="position-absolute text-center"
                style={{
                  marginLeft: '40px',
                  marginTop: '40px',
                }}
              >
                <i className="fa-solid fa-plus"></i>
                <br />
                Tambah Gambar
              </div>
            </div>
          </label>
        </div>
        <div className="col">
          <button className="add-product">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="col">
          <div className="card p-2">
            <img src={userImage} style={imgStyle} />
            <p className="product-title mb-0">Jam Tangan Casio</p>
            <p className="desc mb-0">Aksesoris</p>
            <p className="price">RP 250.000</p>
          </div>
        </div>
        <div className="col">
          <div className="card p-2">
            <img src={userImage} style={imgStyle} />
            <p className="product-title mb-0">Jam Tangan Casio</p>
            <p className="desc mb-0">Aksesoris</p>
            <p className="price">RP 250.000</p>
          </div>
        </div>
        <div className="col">
          <div className="card p-2">
            <img src={userImage} style={imgStyle} />
            <p className="product-title mb-0">Jam Tangan Casio</p>
            <p className="desc mb-0">Aksesoris</p>
            <p className="price">RP 250.000</p>
          </div>
        </div>
        <div className="col">
          <div className="card p-2">
            <img src={userImage} style={imgStyle} />
            <p className="product-title mb-0">Jam Tangan Casio</p>
            <p className="desc mb-0">Aksesoris</p>
            <p className="price">RP 250.000</p>
          </div>
        </div>
        <div className="col">
          <div className="card p-2">
            <img src={userImage} style={imgStyle} />
            <p className="product-title mb-0">Jam Tangan Casio</p>
            <p className="desc mb-0">Aksesoris</p>
            <p className="price">RP 250.000</p>
          </div>
        </div>
        <div className="col">
          <div className="card p-2">
            <img src={userImage} style={imgStyle} />
            <p className="product-title mb-0">Jam Tangan Casio</p>
            <p className="desc mb-0">Aksesoris</p>
            <p className="price">RP 250.000</p>
          </div>
        </div>
        <div className="col">
          <div className="card p-2">
            <img src={userImage} style={imgStyle} />
            <p className="product-title mb-0">Jam Tangan Casio</p>
            <p className="desc mb-0">Aksesoris</p>
            <p className="price">RP 250.000</p>
          </div>
        </div>
        <div className="col">
          <div className="card p-2">
            <img src={userImage} style={imgStyle} />
            <p className="product-title mb-0">Jam Tangan Casio</p>
            <p className="desc mb-0">Aksesoris</p>
            <p className="price">RP 250.000</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
