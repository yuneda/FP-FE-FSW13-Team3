import React from "react";
import { useState, useEffect } from "react";
// import { Toast, Row, Col, Button } from "react-bootstrap";
import userImage from "../../../assets/user.jpg";
import data from '../../../docs/product.json';
import "./ProductList.css";
import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const ProductList = ({ product, action }) => {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  const imgStyle = {
    height: "100px",
    objectFit: "cover",
  };

  const handleNotif = async () => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  return (
    <>
      <div className="row justify-content-start g-1 row-cols-lg-3 row-cols-sm-2 row-cols-1">
        {data.map((data, index) => {
          return (
            <div className="col" key={index}>
              <div className="card p-2">
                <img
                  // src={data.image[0]}
                  src={userImage}
                  style={imgStyle}
                  className="img-fluid"
                />
                <p className="product-title mb-0">{data.name}</p>
                <p className="desc mb-0">{data.desc}</p>
                <div className="row">
                  <div className="col-9">
                    <p className="price">
                      {data.price}
                    </p>
                  </div>
                  <div className="col-3">
                    <i className="fa-solid fa-bookmark" onClick={handleNotif}></i>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
};

export default ProductList;
