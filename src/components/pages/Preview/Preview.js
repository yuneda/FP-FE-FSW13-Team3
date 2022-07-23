import React, { useEffect } from 'react'
import styles from './Preview.module.scss';
import detailImg from '../../../assets/nothing.png';
import Profile from '../../../assets/profile.png';
import MyNavbar from '../../molecules/navbar/Navbar';
import DesktopView from '../Responsive/DesktopView';
import UserMenu from '../../molecules/usermenu/UserMenu';
import NotifDesktop from '../../molecules/notifdesktop/NotifDesktop';
import SwiperProduct from '../../molecules/swiper/SwiperProduct';
import { useMediaQuery } from 'react-responsive';
import { isExpired } from 'react-jwt';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllNotif } from '../../../redux/notifSlice';
import { makeStatusIdle, createProduct } from '../../../redux/productSlice';

const Preview = () => {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token');
  const tokenExpired = isExpired(token);
  const userRedux = useSelector((state) => state.users);
  const notifRedux = useSelector((state) => state.notif);
  const product = useSelector((state) => state.preview.previewProduct);
  const [showMenu, setShowMenu] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [idLogin, setIdLogin] = React.useState(null);
  const mobileView = useMediaQuery({ query: '(max-width: 767px)' });
  const notDesktop = useMediaQuery({ query: '(max-width: 991px)' });
  const toggleMenu = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };
  const toggleShow = async (e) => {
    e.preventDefault();
    dispatch(getAllNotif(token));
    setShow(!show);
  };
  const addProduct = (e) => {
    const data = {
      form: product.form,
      token,
    };
    e.preventDefault();
    dispatch(createProduct(data));
  }
  useEffect(() => {
    dispatch(getAllNotif(token));
    if (userRedux.statusAuth == 'succeeded') {
      setIdLogin(userRedux.auth.id);
    }
  }, [])
  return (
    <>
      <DesktopView>
        <MyNavbar 
          token={token}
          tokenExpired={tokenExpired}
          onToggleMenu={toggleMenu}
          onToggleClick={toggleShow}
        />
      </DesktopView>
      <div className="container position-relative">
        <UserMenu showMenu={showMenu} toggleMenu={toggleMenu} />
        <NotifDesktop
          idLogin={idLogin}
          notif={notifRedux.data}
          toggleShowA={toggleShow}
          showA={show}
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
                    <SwiperProduct imgProduct={product.filesPreview ? product.filesPreview : detailImg} />
                  </div>
                </div>
                <div className={mobileView ? `col-lg-4 col-md-12 mt-4 ${styles.descProduct}` : `col-lg-4 col-md-12 mt-4`}>
                  <div className={`card p-3 ${styles.cardDesc}`}>
                    <div className="row d-flex justify-content-between">
                      <div className="col">
                        <p className={styles.prodTitle}>{product.name}</p>
                      </div>
                      {/* <div className="col-2">
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
                      </div> */}
                    </div>
                    <p className="text-secondary">{product.category}</p>
                    <p>
                      {Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                      }).format(product.price)}
                    </p>
                    {true && (
                      <>
                        <button onClick={addProduct} className={`${styles.btnPublish} mb-2`}>Terbitkan</button>
                        <Link to={`/create`}>
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
                  </div>
                  <div className={`card mt-3 p-2 ${styles.cardDesc}`}>
                    <div className="row align-items-center">
                      <div className="col-3">
                        {console.log(product.User)}
                        {userRedux.auth.image ? (
                          <img
                            src={userRedux.auth.image}
                            alt=""
                            className={`${styles.userImg} img-fluid`}
                          />
                        ) : (
                          <img src={Profile} alt="" className={`${styles.userImg} img-fluid`} />
                        )}
                      </div>
                      <div className="col-9 g-0">
                        <div className="fw-bold">{userRedux.auth.name}</div>
                        <div className="text-secondary">{userRedux.auth.city}</div>
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
                    <p className="fw-light text-secondary">
                      {product.desc}
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
                      {/* <div className="modal-body m-3 p-1">
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
                        </>
                      </div> */}
                    </div>
                  </div>
                </div>

                {/* Offcanvas */}
                {/* <Offcanvas
                  show={show}
                  onHide={handleClose}
                  placement="bottom"
                  className={`${styles.offcancas} tes w-100 h-75`}
                  name="bottom"
                >
                  <Offcanvas.Header closeButton>
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
                </Offcanvas> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Preview