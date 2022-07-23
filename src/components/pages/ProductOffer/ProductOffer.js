import React, { useState, useEffect } from 'react';
import MyNavbar from '../../molecules/navbarProfile/NavbarProfile';
import styles from './ProductOffer.module.scss';
import Buyer from '../../../assets/buyer.png';
import Watch from '../../../assets/watch-offer.png';
import './ProductOffer.scss';
import MyAlert from '../../atoms/alert/Alert';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useMediaQuery } from 'react-responsive';
// component
import ModalAccOffer from './molecules/ModalAccOffer';
import ModalStatusOffer from './molecules/ModalStatusOffer';

const ProductOffer = () => {
  const [accept, setAccept] = useState(false);
  const [product, setProduct] = useState(null);
  const [buyer, setBuyer] = useState(null);
  const [offer, setOffer] = useState(null);
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState('');
  const [sold, setSold] = useState(false);
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const mobileView = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    const url = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/history/' + id;
    const fetchData = async () => {
      try {
        const response = await axios({
          method: 'get',
          url,
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });
        console.log(response.data.data.Offer);
        setBuyer(response.data.data);
        setProduct(response.data.data.Offer.Product);
        setOffer(response.data.data.Offer);
        setUser(response.data.data.Offer.User);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const handleStatus = async (e) => {
    e.preventDefault();
    console.log('status ai');
    if(status == 'sold'){
      try {
        const urlSold =
          'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/product/' +
          product.id +
          '/statussold';
        const soldResponse = await axios({
          method: 'put',
          url: urlSold,
          data: {
            status: 'sold',
          },
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });
        console.log(soldResponse);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleAccept = async (e) => {
    e.preventDefault();

    try {
      const url = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/history';
      const response = await axios({
        method: 'post',
        url,
        data: {
          id_product: product.id,
          id_offer: offer.id,
          id_buyer: buyer.id_buyer,
          id_seller: product.id_user,
        },
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setAccept(true);
  };
  return (
    <div>
      <MyNavbar title="Info Penawar" />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12 col-12 right d-flex">
            <div className="row w-100 justify-content-center ">
              <div className="col-1 mt-5">
                <i className=" fa-solid fa-arrow-left"></i>
              </div>
              <div className="col-10 mt-2">
                <MyAlert
                  title="Status produk berhasil diperbarui"
                  color="success"
                />
                {user && (
                  <div className={`card mt-5 ${styles.cardDesc}`}>
                    <div className="row align-items-center">
                      <div className={`col-2 ${styles.tes1} nyoba`}>
                        <img
                          src={user.image}
                          alt=""
                          className={`${styles.userImg}  img-fluid img-user-offer`}
                        />
                      </div>

                      <div className="col-10 g-0">
                        <div className="fw-bold">{user.name}</div>
                        <div className="text-secondary">{user.city}</div>
                      </div>
                    </div>
                  </div>
                )}
                {offer && (
                  <div>
                    <div className="fw-bold pt-3">
                      Daftar Produkmu yang Ditawar
                    </div>
                    <div className={`${styles.cardOffer}`}>
                      <div className="row align-items-center">
                        <div className="col-2">
                          <img
                            src={product.image}
                            alt=""
                            className={`${styles.productImg} img-fluid p-2`}
                          />
                        </div>
                        <div className="col-10 g-0 ">
                          <div className="row">
                            <div className="col-9 mt-3">
                              <div className="text-secondary">
                                Penawaran produk
                              </div>
                              <div className="">{product.product_name}</div>
                              <div className="">
                                {Intl.NumberFormat('id-ID', {
                                  style: 'currency',
                                  currency: 'IDR',
                                }).format(product.product_price)}
                              </div>
                              <div className="">
                                Ditawar{' '}
                                {Intl.NumberFormat('id-ID', {
                                  style: 'currency',
                                  currency: 'IDR',
                                }).format(offer.bid_price)}
                              </div>
                            </div>
                            <div className="col-3 mt-3">
                              <div className="text-secondary">
                                {new Date(offer.createdAt).toLocaleString(
                                  'en-GB',
                                  {
                                    day: '2-digit',
                                    month: 'short',
                                    hour: 'numeric',
                                    minute: '2-digit',
                                  }
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-2"></div>
                        <div className="row g-0 mt-3">
                          <div className="col-6"></div>
                          <div className="col-6 justify-content-end d-flex mb-3">
                            <button
                              className={`me-3 btn border-radius btn-light px-5 py-2 ${styles.btnEdit}`}
                              data-bs-toggle={
                                accept && !mobileView ? 'modal' : ''
                              }
                              data-bs-target={
                                accept && !mobileView ? '#staticBackdrop' : ''
                              }
                              onClick={() => {
                                if (mobileView) {
                                  setSold(true);
                                }
                                setShow(true);
                              }}
                            >
                              {accept ? 'Status' : 'Tolak'}
                            </button>
                            {accept && (
                              // <Button onClick={handleShow}
                              //   className={
                              //     accept
                              //       ? 'btn border-radius btn-register px-4 py-2'
                              //       : 'btn border-radius btn-register px-5 py-2'
                              //   }
                              // >
                              //   Hubungi di{' '}
                              //   <i className="fa-brands fa-whatsapp"></i>
                              // </Button>
                              <button
                                className={
                                  accept
                                    ? 'btn border-radius btn-register px-4 py-2'
                                    : 'btn border-radius btn-register px-5 py-2'
                                }
                              >
                                Hubungi di{' '}
                                <i className="fa-brands fa-whatsapp"></i>
                              </button>
                            )}
                            {!accept && (
                              <button
                                className={
                                  accept
                                    ? 'btn border-radius btn-register px-4 py-2'
                                    : 'btn border-radius btn-register px-5 py-2'
                                }
                                // onClick={handleAccept}
                                onClick={mobileView ? handleShow : null}
                                data-bs-toggle={mobileView ? '' : 'modal'}
                                data-bs-target={
                                  mobileView ? '' : '#staticBackdrop'
                                }
                              >
                                Terima
                              </button>
                            )}

                            <>
                              {mobileView && (
                                <Offcanvas
                                  show={show}
                                  onHide={handleClose}
                                  placement="bottom"
                                  className={`${styles.offcancas} tes w-100 h-75`}
                                  name="bottom"
                                  backdrop="static"
                                >
                                  <Offcanvas.Header
                                    closeButton
                                    onClick={(e) => {
                                      if (!accept) {
                                        console.log('offcanvas close tes');
                                        handleAccept(e);
                                      }
                                    }}
                                  ></Offcanvas.Header>
                                  <Offcanvas.Body>
                                    <>
                                      <div className="modal-body m-3 p-1">
                                        {accept && sold ? (
                                          <>
                                            <div className="fw-bold">
                                              Perbarui status penjualan produkmu
                                            </div>

                                            <div className={`col-12 mb-3 mt-4`}>
                                              <div className="form-check">
                                                <input
                                                  className="form-check-input custom-control-input"
                                                  type="radio"
                                                  name="exampleRadios"
                                                  id="exampleRadios1"
                                                  defaultValue="option1"
                                                  defaultChecked=""
                                                  onClick={() =>
                                                    setStatus('sold')
                                                  }
                                                />
                                                <label
                                                  className="form-check-label "
                                                  htmlFor="exampleRadios1"
                                                >
                                                  Berhasil terjual
                                                </label>
                                              </div>
                                              <div className="ms-4">
                                                Kamu telah sepakat menjual
                                                produk ini kepada pembeli
                                              </div>
                                            </div>

                                            <div
                                              className={`col-12 mb-3 mt-4 `}
                                            >
                                              <div className="form-check">
                                                <input
                                                  className="form-check-input custom-control-input"
                                                  type="radio"
                                                  name="exampleRadios"
                                                  id="exampleRadios2"
                                                  defaultValue="option1"
                                                  defaultChecked=""
                                                  onClick={() =>
                                                    setStatus('reject')
                                                  }
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="exampleRadios2"
                                                >
                                                  Batalkan transaksi
                                                </label>
                                              </div>
                                              <div className="ms-4">
                                                Kamu membatalkan transaksi
                                                produk ini dengan pembeli
                                              </div>
                                            </div>
                                            <div className={`col-12 mb-3 mt-4`}>
                                              <button
                                                className={`btn border-radius btn-register  px-4 py-3 ${styles.btnEditModal}`}
                                                onClick={handleStatus}
                                              >
                                                Kirim
                                              </button>
                                            </div>
                                          </>
                                        ) : (
                                          <>
                                            <div className="fw-bold">
                                              Yeay kamu berhasil mendapat harga
                                              yang sesuai
                                            </div>
                                            <div className="text-secondary">
                                              Segera hubungi pembeli melalui
                                              whatsapp untuk transaksi
                                              selanjutnya
                                            </div>
                                            <div
                                              className={`row mt-3 ${styles.modalBg}`}
                                            >
                                              <div className="col-12 fw-bold text-center">
                                                Product Match
                                              </div>
                                              <div className={`mt-3`}>
                                                <div className="row align-items-center">
                                                  <div className={`col-3`}>
                                                    <img
                                                      src={Buyer}
                                                      alt=""
                                                      className={`${styles.userImg} img-fluid`}
                                                    />
                                                  </div>
                                                  <div className="col-9">
                                                    <div className="fw-bold">
                                                      Nama Penjual
                                                    </div>
                                                    <div className="text-secondary">
                                                      Kota
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className={`${styles.cardOffer}`}
                                                >
                                                  <div className="row align-items-center">
                                                    <div className="col-3 ">
                                                      <img
                                                        src={Watch}
                                                        alt=""
                                                        className={`${styles.userImg} img-fluid`}
                                                      />
                                                    </div>
                                                    <div className="col-9">
                                                      <div className="row">
                                                        <div className="col-9 mt-3">
                                                          <div className="">
                                                            Jam Tangan Casio
                                                          </div>
                                                          <div className="">
                                                            Rp <s>250.000</s>
                                                          </div>
                                                          <div className="">
                                                            Ditawar Rp 200.000
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className={`col-12 mb-3 mt-4`}>
                                              <a
                                                href="https://wa.me/+628980023612"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                              >
                                                <button
                                                  className={`btn border-radius btn-register  px-4 py-3 ${styles.btnEditModal}`}
                                                >
                                                  Hubungi via Whatsapp &nbsp;
                                                  <i className="fa-brands fa-whatsapp"></i>
                                                </button>
                                              </a>
                                            </div>
                                          </>
                                        )}
                                      </div>
                                    </>
                                  </Offcanvas.Body>
                                </Offcanvas>
                              )}

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
                                  <div
                                    className={`modal-content ${styles.modal}`}
                                  >
                                    <div className="modal-header border-0">
                                      <h5
                                        className="modal-title"
                                        id="staticBackdropLabel"
                                      ></h5>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        onClick={(e) => {
                                          if (!accept) {
                                            handleAccept(e);
                                          }
                                        }}
                                      />
                                    </div>
                                    <div className="modal-body m-3 p-1">
                                      {accept ? (
                                        <ModalStatusOffer
                                          sold={() => setStatus('sold')}
                                          reject={() => setStatus('reject')}
                                          handleStatus={handleStatus}
                                        />
                                      ) : (
                                        <ModalAccOffer />
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          </div>
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOffer;
