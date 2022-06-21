import React, { useState } from 'react';
import NavbarProduct from '../../molecules/navbarproduct/NavbarProduct';
import styles from './BuyerProduct.module.css';
import detailImg from '../../../assets/detail.png';
import Buyer from '../../../assets/buyer.png';
import Watch from '../../../assets/watch-offer.png';
import user from '../../../assets/user.jpg';
import SwiperProduct from '../../molecules/swiper/SwiperProduct';
import MyAlert from '../../atoms/alert/Alert';
import { Toast } from 'react-bootstrap';

const BuyerProduct = () => {
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  const colorGrey = {
    background: '#D0D0D0',
  };
  const colorPurple = {
    background: '#7126B5',
  };
  const [offer, setOffer] = useState(false);
  const handleOffer = (e) => {
    e.preventDefault();
    setOffer(true);
  };
  return (
    <>
      <NavbarProduct onToggleClick={toggleShowA} />
      {offer && (
        <div className="container col-6">
          <MyAlert title="Harga tawarmu berhasil dikirim ke penjual" />
        </div>
      )}
      <div className="container position-relative">
        <Toast
          className={`${styles.cardNotif} p-1 bg-white`}
          show={showA}
          onClose={toggleShowA}
        >
          <Toast.Body>
            <div className={``}>
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
                        20 Apr, 14:04{' '}
                        <i
                          className="fa-solid fa-circle fa-xs"
                          style={{
                            color: 'red',
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
                        20 Apr, 14:04{' '}
                        <i
                          className="fa-solid fa-circle fa-xs"
                          style={{
                            color: 'red',
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
            <div className="row">
              <div className="col-lg-8 col-md-12 mt-4">
                <div className="carousel">
                  <SwiperProduct />
                </div>
              </div>
              <div className={`col-lg-4 col-md-12 mt-4`}>
                <div className={`card p-3 ${styles.cardDesc}`}>
                  <p className={styles.prodTitle}>Jam Tangan Casio</p>
                  <p className="text-secondary">Aksesoris</p>
                  <p>Rp 250.000</p>
                  <button
                    className={`${styles.btnPublish} mb-2`}
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    style={!offer ? colorPurple : colorGrey}
                    disabled={offer}
                  >
                    {!offer
                      ? 'Saya tertarik dan ingin nego'
                      : 'Menunggu Respon Penjual'}
                  </button>
                </div>
                <div className={`card mt-3 p-2 ${styles.cardDesc}`}>
                  <div className="row align-items-center">
                    <div className="col-3">
                      <img
                        src={user}
                        alt=""
                        className={`${styles.userImg} img-fluid`}
                      />
                    </div>
                    <div className="col-9 g-0">
                      <div className="fw-bold">Nama Penjual</div>
                      <div className="text-secondary">Kota</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 mb-4">
                <div className={`card p-4 mt-4 ${styles.cardDesc}`}>
                  <p className="fw-bold">Deskripsi</p>
                  <p className="fw-light text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p className="fw-light text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
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
                <div
                  className={`modal-dialog modal-dialog-centered ${styles.modalOffer}`}
                >
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
                          Harga tawaranmu akan diketahui penual, jika penjual
                          cocok kamu akan segera dihubungi penjual.
                        </div>
                        <div className={`row mt-3 ${styles.modalBg}`}>
                          <div className={`p-3`}>
                            <div className="row align-items-center">
                              <div className={`col-3`}>
                                <img
                                  src={Buyer}
                                  alt=""
                                  className={`${styles.userImg} img-fluid`}
                                />
                              </div>
                              <div className="col-9">
                                <div className="fw-bold">Jam Tangan Casio</div>
                                <div className="">Rp 250.000</div>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerProduct;
