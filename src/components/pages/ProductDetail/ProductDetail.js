import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavbarProduct from '../../molecules/navbarproduct/NavbarProduct';
import styles from './ProductDetail.module.css';
import detailImg from '../../../assets/nothing.png';
import user from '../../../assets/user.jpg';
import SwiperProduct from '../../molecules/swiper/SwiperProduct';
import Buyer from '../../../assets/buyer.png';
import axios from 'axios';
import { useState } from 'react';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [idLogin, setIdLogin] = useState(null);
  const [idSeller, setIdSeller] = useState(null);
  const { id } = useParams();
  const token = localStorage.getItem('token');
  // Buyer
  const [price, setPrice] = useState('');
  const colorGrey = {
    background: '#D0D0D0',
  };
  const colorPurple = {
    background: '#7126B5',
  };
  const [offer, setOffer] = useState(false);
  const handlePrice = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  };
  const handleOffer = async (e) => {
    e.preventDefault();
    setOffer(true);
    console.log(id, price, token);
    try {
      const url = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/offer';
      const responseOffer = await axios({
        method: 'post',
        url,
        data: {
          id_product: id,
          bid_price: price,
          id_seller: product.id_user,
        },
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      console.log(responseOffer);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const url = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/product/' + id;
    const urlUser = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/user';

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const responseUser = await axios.get(urlUser, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });
        setProduct(response.data.data);
        console.log(response.data.data);
        setIdSeller(response.data.data.id_user);
        setIdLogin(responseUser.data.data.id);
      } catch (error) {
        console.log('error adalah', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <NavbarProduct />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            {product && (
              <div className="row">
                <div className="col-lg-8 col-md-12 mt-4">
                  <div className="carousel">
                    <SwiperProduct
                      imgProduct={product ? product.image : detailImg}
                    />
                  </div>
                </div>
                <div className={`col-lg-4 col-md-12 mt-4`}>
                  <div className={`card p-3 ${styles.cardDesc}`}>
                    <p className={styles.prodTitle}>{product.product_name}</p>
                    <p className="text-secondary">{product.category}</p>
                    <p>
                      {Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                      }).format(product.product_price)}
                    </p>
                    {idLogin == idSeller && (
                      <>
                        <button className={`${styles.btnPublish} mb-2`}>
                          Terbitkan
                        </button>
                        <button className={styles.btnEdit}>Edit</button>
                      </>
                    )}
                    {idLogin !== idSeller && (
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
                    )}
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
                        <div className="fw-bold">{product.User.name}</div>
                        <div className="text-secondary">
                          {product.User.city}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12 mb-4">
                  <div className={`card p-4 mt-4 ${styles.cardDesc}`}>
                    <p className="fw-bold">Deskripsi</p>
                    <p className="fw-light text-secondary">
                      {product.description}
                    </p>
                    <p className="fw-light text-secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
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
                        <h5
                          className="modal-title"
                          id="staticBackdropLabel"
                        ></h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body m-3 p-1">
                        <>
                          <div className="fw-bold">
                            Masukkan Harga Tawaranmu
                          </div>
                          <div className="text-secondary">
                            Harga tawaranmu akan diketahui penual, jika penjual
                            cocok kamu akan segera dihubungi penjual.
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
                                  <div className="fw-bold">
                                    {product.product_name}
                                  </div>
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
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
