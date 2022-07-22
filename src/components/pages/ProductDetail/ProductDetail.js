import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MyNavbar from '../../molecules/navbar/Navbar';
// import styles from './ProductDetail.module.css';
import styles from './ProductDetail.module.scss';
import detailImg from '../../../assets/nothing.png';
import SwiperProduct from '../../molecules/swiper/SwiperProduct';
import UserMenu from '../Home/molecules/UserMenu';
import NotifDesktop from '../Home/molecules/NotifDesktop';
import Profile from '../../../assets/profile.png';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { isExpired } from 'react-jwt';
import { useState } from 'react';
import DesktopView from '../Responsive/DesktopView';
import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { getAllNotif } from '../../../redux/notifSlice';
import { addOffer, makeStatusIdle, handlewishlist } from '../../../redux/transactionSlice';
import { authUser } from '../../../redux/usersSlice';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notifRedux = useSelector((state) => state.notif);
  const userRedux = useSelector((state) => state.users);
  const [product, setProduct] = useState(null);
  const [idLogin, setIdLogin] = useState(null);
  const [idSeller, setIdSeller] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [showA, setShowA] = useState(false);
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const tokenExpired = isExpired(token);
  const notDesktop = useMediaQuery({ query: '(max-width: 991px)' });
  const mobileView = useMediaQuery({ query: '(max-width: 767px)' });
  const [showMenu, setShowMenu] = useState(false);
  const [price, setPrice] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const colorGrey = {
    background: '#D0D0D0',
  };
  const colorPurple = {
    background: '#7126B5',
  };
  const [offer, setOffer] = useState(false);
  const toggleMenu = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };
  const toggleShowA = async (e) => {
    e.preventDefault();
    dispatch(getAllNotif(token));
    setShowA(!showA);
  };
  const handlePrice = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  };
  const handleOffer = async (e) => {
    e.preventDefault();
    setOffer(true);
    console.log(id, price, token);
    const data = {
      id_product: id,
      bid_price: price,
      id_seller: product.id_user,
      token,
    };
    dispatch(addOffer(data));
  };
  const handleWishlist = async (action) => {
    let endPoint;
    if (action) {
      endPoint = 'deletewishlist';
    } else {
      endPoint = 'wishlist';
    }
    const data = {
      token,
      id_product: product.id,
      endPoint,
    };
    dispatch(handlewishlist(data));
  };
  useEffect(() => {
    dispatch(makeStatusIdle());
    dispatch(getAllNotif(token));
    const url = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/product/' + id;
    if (userRedux.statusAuth == 'succeeded') {
      setIdLogin(userRedux.auth.id);
      if (userRedux.auth.wishlist) {
        setWishlist(userRedux.auth.wishlist);
      }
    }
    async function fetchData() {
      const response = await axios.get(url);
      setProduct(response.data.data);
      setIdSeller(response.data.data.id_user);
    }
    dispatch(authUser(token));
    if (!token || tokenExpired) {
      navigate('/login');
    }
    // if (notifRedux.status == 'succeeded') {
    //   setNotif(notifRedux.data);
    // }
    fetchData();
  }, [token, tokenExpired]);

  return (
    <>
      <DesktopView>
        {/* <NavbarProduct /> */}
        <MyNavbar
          token={token}
          tokenExpired={tokenExpired}
          onToggleClick={toggleShowA}
          onToggleMenu={toggleMenu}
        />
      </DesktopView>
      <div className="container position-relative">
        <UserMenu showMenu={showMenu} toggleMenu={toggleMenu} />
        <NotifDesktop
          idLogin={idLogin}
          notif={notifRedux.data}
          toggleShowA={toggleShowA}
          showA={showA}
        />
      </div>
      {mobileView &&
        <Link to="/" className='tes'>
          <i
            className={`fa-solid fa-arrow-left ${styles.back}`}
          ></i>
        </Link>
      }
      <div className={notDesktop ? '' : 'container'}>
        <div className="row justify-content-center">
          <div className={notDesktop ? 'col-12' : 'col-10'}>
            {product && (
              <div className="row">
                <div className={notDesktop ? 'col-lg-8 col-md-12' : 'col-lg-8 col-md-12 mt-4'}>
                  <div className="carousel">
                    <SwiperProduct imgProduct={product ? product.image : detailImg} />
                  </div>
                </div>
                <div className={mobileView ? `col-lg-4 col-md-12 mt-4 ${styles.descProduct}` : `col-lg-4 col-md-12 mt-4`}>
                  <div className={`card p-3 ${styles.cardDesc}`}>
                    <div className="row d-flex justify-content-between">
                      <div className="col">
                        <p className={styles.prodTitle}>{product.product_name}</p>
                      </div>
                      <div className="col-2">
                        <i
                          onClick={(e) => {
                            e.preventDefault();
                            handleWishlist(wishlist.includes(product.id));
                          }}
                          className={
                            wishlist.includes(product.id)
                              ? 'fa-solid fa-bookmark'
                              : 'fa-regular fa-bookmark'
                          }
                        ></i>
                      </div>
                    </div>
                    <p className="text-secondary">{product.category}</p>
                    <p>
                      {Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                      }).format(product.product_price)}
                    </p>
                    {idLogin && idLogin == idSeller && (
                      <>
                        <button className={`${styles.btnPublish} mb-2`}>Terbitkan</button>
                        <Link to={`/edit/${id}`}>
                          <button
                            className={styles.btnEdit}
                            style={{
                              width: '100%',
                            }}
                          >
                            Edit
                          </button>
                        </Link>
                      </>
                    )}
                    {idLogin && idLogin !== idSeller && (
                      // <button
                      //   className={`${styles.btnPublish} mb-2`}
                      //   data-bs-toggle="modal"
                      //   data-bs-target="#staticBackdrop"
                      //   style={!offer ? colorPurple : colorGrey}
                      //   disabled={offer}
                      // >
                      //   {!offer
                      //     ? 'Saya tertarik dan ingin nego'
                      //     : 'Menunggu Respon Penjual'}
                      // </button>
                      <Button
                        onClick={handleShow}
                        className={`${styles.btnPublish} mb-2`}
                        style={!offer ? colorPurple : colorGrey}
                        disabled={offer}
                      >
                        {!offer ? 'Saya tertarik dan ingin nego' : 'Menunggu Respon Penjual'}
                      </Button>
                    )}
                  </div>
                  <div className={`card mt-3 p-2 ${styles.cardDesc}`}>
                    <div className="row align-items-center">
                      <div className="col-3">
                        {console.log(product.User)}
                        {product.User.image ? (
                          <img
                            src={product.User.image}
                            alt=""
                            className={`${styles.userImg} img-fluid`}
                          />
                        ) : (
                          <img src={Profile} alt="" className={`${styles.userImg} img-fluid`} />
                        )}
                      </div>
                      <div className="col-9 g-0">
                        <div className="fw-bold">{product.User.name}</div>
                        <div className="text-secondary">{product.User.city}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    mobileView
                      ? `col-lg-8 col-md-12 mb-4 ${styles.descProduct}`
                      : `col-lg-8 col-md-12 mb-4`
                  }
                >
                  <div className={`card p-4 mt-4 ${styles.cardDesc}`}>
                    <p className="fw-bold">Deskripsi</p>
                    <p className="fw-light text-secondary">{product.description}</p>
                    <p className="fw-light text-secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
                {/* Modal */}
                <div
                  className="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className={`modal-dialog modal-dialog-centered ${styles.modalOffer}`}>
                    <div className={`modal-content ${styles.modal}`}>
                      <div className="modal-header border-0">
                        <h5 className="modal-title" id="staticBackdropLabel"></h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body m-3 p-1">
                        <>
                          <div className="fw-bold">Masukkan Harga Tawaranmu</div>
                          <div className="text-secondary">
                            Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan
                            segera dihubungi penjual.
                          </div>
                          <div className={`mt-3 ${styles.modalBg}`}>
                            <div className={`p-3`}>
                              <div className="row align-items-center">
                                <div className={`col-3`}>
                                  <img
                                    src={product.image[0]}
                                    // src={Buyer}
                                    style={{
                                      width: '58.5px',
                                      height: '58.5px',
                                      objectFit: 'cover',
                                    }}
                                    alt=""
                                    className={`${styles.userImg} img-fluid`}
                                  />
                                </div>
                                <div className="col-9">
                                  <div className="fw-bold">{product.product_name}</div>
                                  <div className="">
                                    {Intl.NumberFormat('id-ID', {
                                      style: 'currency',
                                      currency: 'IDR',
                                    }).format(product.product_price)}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <label htmlFor="priceOffer">Harga Tawar</label>
                            <div className="input-group mb-3">
                              <input
                                id="priceOffer"
                                type="text"
                                className="border-radius form-control"
                                placeholder="Rp 0, 00"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                autoComplete="off"
                                onChange={handlePrice}
                                value={price}
                              />
                            </div>
                          </div>
                          <div className={`col-12 mb-3 mt-4`}>
                            <button
                              className={`btn border-radius btn-register  px-4 py-3 ${styles.btnEditModal}`}
                              onClick={handleOffer}
                            >
                              Kirim
                            </button>
                          </div>
                        </>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Offcanvas */}
                <Offcanvas
                  show={show}
                  onHide={handleClose}
                  placement="bottom"
                  className={`${styles.offcancas} tes w-100 h-75`}
                  name="bottom"
                >
                  <Offcanvas.Header closeButton>
                    {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <>
                      <div className="fw-bold">Masukkan Harga Tawaranmu</div>
                      <div className="text-secondary">
                        Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera
                        dihubungi penjual.
                      </div>
                      <div className={`mt-3 ${styles.modalBg}`}>
                        <div className={`p-3`}>
                          <div className="row align-items-center">
                            <div className={`col-3`}>
                              <img
                                src={product.image[0]}
                                // src={Buyer}
                                style={{
                                  width: '58.5px',
                                  height: '58.5px',
                                  objectFit: 'cover',
                                }}
                                alt=""
                                className={`${styles.userImg} img-fluid`}
                              />
                            </div>
                            <div className="col-9">
                              <div className="fw-bold">{product.product_name}</div>
                              <div className="">
                                {Intl.NumberFormat('id-ID', {
                                  style: 'currency',
                                  currency: 'IDR',
                                }).format(product.product_price)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <label htmlFor="priceOffer">Harga Tawar</label>
                        <div className="input-group mb-3">
                          <input
                            id="priceOffer"
                            type="text"
                            className="border-radius form-control"
                            placeholder="Rp 0, 00"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            autoComplete="off"
                            onChange={handlePrice}
                            value={price}
                          />
                        </div>
                      </div>
                      <div className={`col-12 mb-3 mt-4`}>
                        <button
                          className={`btn border-radius btn-register  px-4 py-3 ${styles.btnEditModal}`}
                          onClick={handleOffer}
                        >
                          Kirim
                        </button>
                      </div>
                    </>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
