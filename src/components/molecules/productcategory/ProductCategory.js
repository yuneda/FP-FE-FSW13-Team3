import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonCategory from "../../atoms/buttoncategory/ButtonCategory";
import not_found from "../../../assets/not_found.png";
import "./ProductCategory.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ScaleLoader from "react-spinners/ScaleLoader";
import { successAlert } from "../../../utils/alert";
import { decodeToken, isExpired } from "react-jwt";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../../redux/productSlice";

const MySwal = withReactContent(Swal);

const ProductCategory = ({ handleFilter, token }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const tokenExpired = isExpired(token);
  const [all, setAll] = useState(true);
  const [hobby, setHobby] = useState(false);
  const [vehicle, setVehicle] = useState(false);
  const [shirt, setShirt] = useState(false);
  const [electronic, setElectronic] = useState(false);
  const [health, setHealth] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleAll = (e) => {
    e.preventDefault();
    setAll(true);
    setHobby(false);
    setVehicle(false);
    setShirt(false);
    setElectronic(false);
    setHealth(false);
  };
  const handleHobby = (e) => {
    e.preventDefault();
    setAll(false);
    setHobby(true);
    setVehicle(false);
    setShirt(false);
    setElectronic(false);
    setHealth(false);
  };
  const handleVehicle = (e) => {
    e.preventDefault();
    setAll(false);
    setHobby(false);
    setVehicle(true);
    setShirt(false);
    setElectronic(false);
    setHealth(false);
  };
  const handleShirt = (e) => {
    e.preventDefault();
    setAll(false);
    setHobby(false);
    setVehicle(false);
    setShirt(true);
    setElectronic(false);
    setHealth(false);
  };
  const handleElectronic = (e) => {
    e.preventDefault();
    setAll(false);
    setHobby(false);
    setVehicle(false);
    setShirt(false);
    setElectronic(true);
    setHealth(false);
  };
  const handleHealth = (e) => {
    e.preventDefault();
    setAll(false);
    setHobby(false);
    setVehicle(false);
    setShirt(false);
    setElectronic(false);
    setHealth(true);
  };
  const handleAddWishlist = async (e) => {
    MySwal.fire({
      position: "center",
      icon: "success",
      title: "Added to wishlist",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  useEffect(() => {
    dispatch(getAllProduct());
    const urlUser = "https://fp-be-fsw13-tim3.herokuapp.com/api/v1/user";
    const fetchData = async () => {
      try {
        const responseUser = await axios.get(urlUser, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        if (responseUser.data.data.wishlist) {
          setWishlist(responseUser.data.data.wishlist);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);
  const handleWishlist = async (action, id) => {
    console.log(action);
    let endPoint;
    if (action) {
      endPoint = "deletewishlist";
    } else {
      endPoint = "wishlist";
    }
    try {
      const response = await axios({
        method: "put",
        url: "https://fp-be-fsw13-tim3.herokuapp.com/api/v1/" + endPoint,
        data: {
          id_product: id,
        },
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      successAlert();
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container mt-5">
        <p className="title fw-bold">Telusuri Kategori</p>
        <div className="">
          <ScrollMenu>
            <ButtonCategory
              content="Semua"
              isActive={all ? true : false}
              handleFilter={handleFilter}
              changeActive={setAll}
              handleChange={handleAll}
            />
            <ButtonCategory
              content="Hobi"
              isActive={hobby ? true : false}
              handleFilter={handleFilter}
              changeActive={setHobby}
              handleChange={handleHobby}
            />
            <ButtonCategory
              content="Kendaraan"
              isActive={vehicle ? true : false}
              handleFilter={handleFilter}
              changeActive={setVehicle}
              handleChange={handleVehicle}
            />
            <ButtonCategory
              content="Baju"
              isActive={shirt ? true : false}
              handleFilter={handleFilter}
              changeActive={setShirt}
              handleChange={handleShirt}
            />
            <ButtonCategory
              content="Elektronik"
              isActive={electronic ? true : false}
              handleFilter={handleFilter}
              changeActive={setElectronic}
              handleChange={handleElectronic}
            />
            <ButtonCategory
              content="Kesehatan"
              isActive={health ? true : false}
              handleFilter={handleFilter}
              changeActive={setHealth}
              handleChange={handleHealth}
            />
          </ScrollMenu>
        </div>
        <div className="row justify-content-start g-2 row-cols-lg-6 row-cols-md-4 row-cols-sm-2 row-cols-1 my-5">
          {product.status == "succeeded" &&
            product.data.map((data, index) => {
              return (
                <Link
                  key={index}
                  to={`product/${data.id}`}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <div key={index} className="col" data-aos="fade-up">
                    <div className="card p-2">
                      <img
                        src={data.image[0]}
                        alt=""
                        style={{
                          height: "97.1719px",
                          objectFit: "cover",
                        }}
                      />
                      <p className="product-title mb-0">{data.product_name}</p>
                      <p className="desc mb-0">{data.category}</p>
                      <div className="row">
                        <div className="col-9">
                          <p className="price">
                            {Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                            }).format(data.product_price)}
                          </p>
                        </div>
                        {token && !tokenExpired && (
                          <div className="col-3">
                            <Link
                              to="/"
                              style={{
                                color: "inherit",
                                textDecoration: "inherit",
                              }}
                              onClick={async (e) => {
                                e.preventDefault();
                                handleWishlist(
                                  wishlist.includes(data.id),
                                  data.id
                                );
                              }}
                            >
                              <i
                                className={
                                  wishlist.includes(data.id)
                                    ? // [1, 2, 3].includes(data.id)
                                      "fa-solid fa-bookmark"
                                    : "fa-regular fa-bookmark"
                                }
                              ></i>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          {product.status == "succeeded" && product.data.length == 0 && (
            <div className="w-100">
              <img
                src={not_found}
                alt=""
                className="m-auto d-flex justify-content-center w-50"
              />
            </div>
          )}
          {product.status == "loading" && (
            <ScaleLoader
              color={"#7126B5"}
              loading={loading}
              size={50}
              className="mx-auto"
            />
          )}
        </div>
      </div>
      <Link to={token ? "/create" : "/login"}>
        <ButtonCategory content="Jual" isActive={true} css="btn-sell d-block" />
      </Link>
    </>
  );
};

export default ProductCategory;
