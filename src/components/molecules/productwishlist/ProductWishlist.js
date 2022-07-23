import React from "react";
import { useState, useEffect } from "react";
// import { Toast, Row, Col, Button } from "react-bootstrap";
import NoWishlist from "../../../assets/no_wishlist.png";
// import data from '../../../docs/product.json';
import "./ProductWishlist.scss";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link, useNavigate } from "react-router-dom";
import { isExpired } from "react-jwt";
import { wishlistProduct } from "../../../redux/productSlice";
import { useSelector, useDispatch } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";

const MySwal = withReactContent(Swal);

const ProductWishlist = ({ action }) => {
  const token = localStorage.getItem("token");
  const tokenExpired = isExpired(token);
  const product = useSelector((state) => state.product);
  const [showA, setShowA] = useState(true);
  const [data, setData] = useState([]);
  const toggleShowA = () => setShowA(!showA);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const imgStyle = {
    height: "100px",
    objectFit: "cover",
  };

  const handleDelete = async (data) => {
    try {
      const result = await MySwal.fire({
        title: "Are you sure want to delete " + data.product_name + " ?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      console.log(result);
      if (result.isConfirmed) {
        const response = await axios({
          url: "https://fp-be-fsw13-tim3.herokuapp.com/api/v1/deletewishlist",
          method: "put",
          data: {
            id_product: data.id,
          },
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(response);
        MySwal.fire("Deleted!", "Your file has been deleted.", "success");
        window.location.reload(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    dispatch(wishlistProduct(token));
    if (!token || tokenExpired) {
      navigate("/login");
    }
    const fetchWishList = async () => {
      try {
        const response = await axios({
          method: "get",
          url: "https://fp-be-fsw13-tim3.herokuapp.com/api/v1/productWishlist",
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(response.data.data.data);
        setData(response.data.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchWishList();
  }, []);
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);

  return (
    <>
      <div
        className="row justify-content-start g-1 row-cols-lg-3 row-cols-sm-2 row-cols-1"
        data-aos="fade-up"
      >
        {data &&
          data.map((data, index) => {
            return (
              <Link
                to={`/product/${data.id}`}
                style={{
                  color: "inherit",
                  textDecoration: "inherit",
                }}
                key={index}
              >
                <div className="col">
                  <div className="card p-2">
                    <img
                      // src={data.image[0]}
                      src={data.image}
                      style={imgStyle}
                      className="img-fluid"
                    />
                    <p className="product-title mb-0">{data.product_name}</p>
                    <p className="desc mb-0">{data.category}</p>
                    <div className="row">
                      <div className="col-9">
                        <p className="price">{data.product_price}</p>
                      </div>
                      <div className="col-3">
                        <Link
                          to="/wishlist"
                          style={{
                            color: "inherit",
                            textDecoration: "inherit",
                          }}
                        >
                          <i
                            className="fa-solid fa-bookmark"
                            onClick={async (e) => {
                              e.preventDefault();
                              try {
                                handleDelete(data);
                              } catch (error) {
                                console.log(error.message);
                              }
                            }}
                          ></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        {/* {console.log(product.status)} */}
        {console.log(product.data)}
        {/* {product.status == 'idle' &&         */}
        {product.data.length == 0 && (
          <>
            <img src={NoWishlist} className="row m-auto w-75" />
          </>
        )}
      </div>
    </>
  );
};

export default ProductWishlist;
