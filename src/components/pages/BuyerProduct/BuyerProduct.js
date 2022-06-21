import React from "react";
import NavbarProduct from "../../molecules/navbarproduct/NavbarProduct";
import styles from "./BuyerProduct.module.css";
import detailImg from "../../../assets/detail.png";
import user from "../../../assets/user.jpg";
import SwiperProduct from "../../molecules/swiper/SwiperProduct";
import MyAlert from "../../atoms/alert/Alert";

const BuyerProduct = () => {
  return (
    <>
      <NavbarProduct />
      <div className="container col-6">
        <MyAlert title="Harga tawarmu berhasil dikirim ke penjual" />
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
                  <button className={`${styles.btnPublish} mb-2`}>
                    Saya tertarik dan ingin nego
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerProduct;
