import React, { useState } from 'react';
import NavbarProduct from '../../molecules/navbarproduct/NavbarProduct';
import './Product.css';
import styles from './Product.module.css';
import userImage from '../../../assets/user.jpg';
import likeImage from '../../../assets/liked.png';
import Buyer from '../../../assets/buyer.png';
import Watch from '../../../assets/watch-offer.png';
import ProductCatDesk from '../../molecules/productcatdesk/ProductCatDesk';
import ProductList from '../../molecules/productlist/ProductList';
import { Toast } from 'react-bootstrap';

const Product = () => {
  const [showA, setShowA] = useState(false);
  const [all, setAll] = useState(false);
  const [like, setLike] = useState(false);
  const [sold, setSold] = useState(false);

  const toggleShowA = () => setShowA(!showA);
  const title = {
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '30px',
  };
  const colorActive = {
    color: '#7126B5',
  };
  const colorInactive = {
    color: 'black',
  };
  const handleAll = () => {
    setAll(true);
    setLike(false);
    setSold(false);
  };
  const handleLike = () => {
    setAll(false);
    setLike(true);
    setSold(false);
  };
  const handleSold = () => {
    setAll(false);
    setLike(false);
    setSold(true);
  };

  return (
    <>
      <NavbarProduct onToggleClick={toggleShowA} />
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
            <div className="col-12 mt-4 mb-3">
              <h2 style={title}>Daftar Jual Saya</h2>
            </div>
            <div className="col-12">
              <div className="card card-user p-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="col me-2">
                    <img src={userImage} className="w-100 img-user" />
                  </div>
                  <div className="col-10">
                    <div>
                      <p className="name-user">Nama Penjual</p>
                      <p className="address-user">kota</p>
                    </div>
                  </div>
                  <div className="col">
                    <button className="btn-edit">Edit</button>
                  </div>
                </div>
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
                  {all && <ProductList />}
                  {like && (
                    <div className="text-center">
                      <img src={likeImage} alt="" className="" />
                    </div>
                  )}
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
