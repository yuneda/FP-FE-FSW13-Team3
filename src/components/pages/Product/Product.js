import React, { useState, useEffect } from "react";
import NavbarProduct from "../../molecules/navbarproduct/NavbarProduct";
// import './Product.css';
import "./Product.scss";
// import styles from "./Product.module.css";
import styles from "./Product.module.scss";
import userImage from "../../../assets/user.jpg";
import likeImage from "../../../assets/liked.png";
import Buyer from "../../../assets/buyer.png";
import Watch from "../../../assets/watch-offer.png";
import ProductCatDesk from "../../molecules/productcatdesk/ProductCatDesk";
import ProductList from "../../molecules/productlist/ProductList";
import { Toast } from "react-bootstrap";
import axios from "axios";
import MyNavbar from '../../molecules/navbarProfile/OffcanvasProfile';
import DesktopView from '../Responsive/DesktopView';
import TabletView from '../Responsive/TabletView';
import MobileView from '../Responsive/MobileView';
import { useMediaQuery } from 'react-responsive';
import { getAllNotif } from '../../../redux/notifSlice';
import UserMenu from '../Home/molecules/UserMenu';
import NotifDesktop from '../Home/molecules/NotifDesktop';

const Product = () => {
  const [data, setData] = useState([]);
  const [showA, setShowA] = useState(false);
  const [all, setAll] = useState(false);
  const [like, setLike] = useState(false);
  const [sold, setSold] = useState(false);
  const [user, setUser] = useState(null);
  const [notif, setNotif] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [idLogin, setIdLogin] = useState(null);
  const token = localStorage.getItem("token");
  const notDesktop = useMediaQuery({ query: '(max-width: 991px)' });
  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const url = "https://fp-be-fsw13-tim3.herokuapp.com/api/v1/user";
        const responseUser = await axios({
          method: "get",
          url,
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setUser(responseUser.data.data);
        // console.log(responseUser.data.data);
      } catch (error) {
        console.log("error adalah", error);
      }
    };
    fetchDataUser();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://fp-be-fsw13-tim3.herokuapp.com/api/v1/allproduct";
        const response = await axios({
          method: "post",
          url,
          data: {
            status: "available",
          },
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setData(response.data.data.product);
      } catch (error) {
        console.log("error adalah", error);
      }
    };
    fetchData();
  }, []);

  // const toggleShowA = () => setShowA(!showA);
  const title = {
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "30px",
  };
  const colorActive = {
    color: "#7126B5",
  };
  const colorInactive = {
    color: "black",
  };
  const handleAll = async () => {
    const url = "https://fp-be-fsw13-tim3.herokuapp.com/api/v1/allproduct";
    try {
      const response = await axios({
        method: "post",
        url,
        data: {
          status: "available",
        },
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setData(response.data.data.product);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setAll(true);
    setLike(false);
    setSold(false);
  };
  const handleLike = async () => {
    const url = "https://fp-be-fsw13-tim3.herokuapp.com/api/v1/allproduct";
    try {
      const response = await axios({
        method: "post",
        url,
        data: {
          status: "interested",
        },
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setData(response.data.data.product);
      console.log(response);
      console.log("like berhasil");
    } catch (error) {
      console.log("like gagal");
      console.log(error);
    }
    setAll(false);
    setLike(true);
    setSold(false);
  };
  const handleSold = async () => {
    const url = "https://fp-be-fsw13-tim3.herokuapp.com/api/v1/allproduct";
    try {
      const response = await axios({
        method: "post",
        url,
        data: {
          status: "sold",
        },
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setData(response.data.data.product);
      console.log(response.data.data.product);
      console.log("sold berhasil");
    } catch (error) {
      console.log("sold gagal");
      console.log(error);
    }
    setAll(false);
    setLike(false);
    setSold(true);
  };
  const toggleMenu = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };
  const toggleShowA = async (e) => {
    e.preventDefault();
    dispatch(getAllNotif(token));
    setShowA(!showA);
  };

  return (
    <>
      <DesktopView>
        <NavbarProduct onToggleClick={toggleShowA} onToggleUser={toggleMenu}/>
      </DesktopView>
      <TabletView>
        <MyNavbar title="Daftar Jual Saya" />
      </TabletView>
      <MobileView>
        <MyNavbar title="Daftar Jual Saya" />
      </MobileView>

      <div className="container position-relative">
        <UserMenu showMenu={showMenu} toggleMenu={toggleMenu} />
        <NotifDesktop idLogin={idLogin} notif={notif} toggleShowA={toggleShowA} showA={showA} />
      </div>

      <div className="container position-relative">
        <Toast
          className={`${styles.cardNotif} p-1 bg-white`}
          show={showA}
          onClose={toggleShowA}
        >
          <Toast.Body>
            <div className={``} style={{overflowX: "hidden", maxHeight: "300px"}}>
              <div className="row">
                <div className="col-3">
                  <img
                    src={Watch}
                    alt=""
                    className={`${styles.productImg} img-fluid`}
                  />
                </div>
                <div className="col-9 g-0 ">
                  <div className="row">
                    <div className="col-7 g-0  ps-3">
                      <div className="text-secondary">Penawaran produk</div>
                      <div className="fw-bold">Jam Tangan Casio</div>
                      <div className="fw-bold">Rp 250.000</div>
                      <div className="fw-bold">Ditawar Rp 200.000</div>
                    </div>
                    <div className="col-5 g-0 ">
                      <div className="text-secondary">
                        20 Apr, 14:04{" "}
                        <i
                          className="fa-solid fa-circle fa-xs"
                          style={{
                            color: "red",
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <hr />
                </div>
                <div className="col-3">
                  <img
                    src={Watch}
                    alt=""
                    className={`${styles.productImg} img-fluid`}
                  />
                </div>
                <div className="col-9 g-0 ">
                  <div className="row">
                    <div className="col-7 g-0  ps-3">
                      <div className="text-secondary">Penawaran produk</div>
                      <div className="fw-bold">Jam Tangan Casio</div>
                      <div className="fw-bold">Rp 250.000</div>
                      <div className="fw-bold">Ditawar Rp 200.000</div>
                    </div>
                    <div className="col-5 g-0 ">
                      <div className="text-secondary">
                        20 Apr, 14:04{" "}
                        <i
                          className="fa-solid fa-circle fa-xs"
                          style={{
                            color: "red",
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Toast.Body>
        </Toast>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="col-12 mt-4 mb-3">
              <h2 style={title}>{notDesktop ? '' : 'Daftar Jual Saya'}</h2>
            </div>
            <div className="col-12">
              <div className="card card-user p-2">
                {user && (
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="col me-2">
                      <img
                        src={user.image}
                        className="w-100 img-user img-fluid"
                      />
                    </div>
                    <div className="col-10">
                      <div>
                        <p className="name-user">{user.name}</p>
                        <p className="address-user">{user.city}</p>
                      </div>
                    </div>
                    <div className="col">
                      <button className="btn-edit">Edit</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-12 my-3">
              <div className="row">
                <div className="col-3">
                  {/* <ProductCatDesk /> */}
                  <div className="card-category card p-4">
                    <p className="name-user mb-3">Kategori</p>
                    <button
                      onClick={handleAll}
                      className="btn-category-product"
                    >
                      <div
                        className="d-flex justify-content-between"
                        style={all ? colorActive : colorInactive}
                      >
                        <div>
                          <i className="me-2 fa-regular fa-user"></i>Semua
                          Produk
                        </div>
                        <div>
                          <i className="fa-solid fa-angle-right"></i>
                        </div>
                      </div>
                    </button>
                    <hr />
                    <button
                      onClick={handleLike}
                      className="btn-category-product"
                    >
                      <div
                        className="d-flex justify-content-between"
                        style={like ? colorActive : colorInactive}
                      >
                        <div>
                          <i className="me-2 fa-solid fa-heart"></i>
                          Diminati
                        </div>
                        <div>
                          <i className="fa-solid fa-angle-right"></i>
                        </div>
                      </div>
                    </button>
                    <hr />
                    <button
                      onClick={handleSold}
                      className="btn-category-product"
                    >
                      <div
                        className="d-flex justify-content-between"
                        style={sold ? colorActive : colorInactive}
                      >
                        <div>
                          <i className="me-2 fa-solid fa-dollar-sign"></i>
                          Terjual
                        </div>
                        <div>
                          <i className="fa-solid fa-angle-right"></i>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="col-9">
                  {all && <ProductList product={data} action={true} />}
                  {like && !data && (
                    <div className="text-center">
                      <img src={likeImage} alt="" className="" />
                    </div>
                  )}
                  {like && data.length > 0 && <ProductList product={data} />}
                  {sold && data.length > 0 && <ProductList product={data} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
