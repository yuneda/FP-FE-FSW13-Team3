import React, { useState } from "react";
import MyNavbar from "../../molecules/navbarProfile/NavbarProfile";
import styles from "./ProductOffer.module.css";
import Buyer from "../../../assets/buyer.png";
import Watch from "../../../assets/watch-offer.png";
import "./ProductOffer.css";
import MyAlert from "../../atoms/alert/Alert";

const ProductOffer = () => {
  const [accept, setAccept] = useState(false);

  const handleAccept = (e) => {
    e.preventDefault();
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
                <MyAlert title="Status produk berhasil diperbarui" />
                <div className={`card mt-5 ${styles.cardDesc}`}>
                  <div className="row align-items-center">
                    <div className={`col-2 ${styles.tes1}`}>
                      <img
                        src={Buyer}
                        alt=""
                        className={`${styles.userImg} img-fluid`}
                      />
                    </div>
                    <div className="col-10 ">
                      <div className="fw-bold">Nama Penjual</div>
                      <div className="text-secondary">Kota</div>
                    </div>
                  </div>
                </div>
                <div className="fw-bold pt-3">Daftar Produkmu yang Ditawar</div>
                <div className={`${styles.cardOffer}`}>
                  <div className="row align-items-center">
                    <div className="col-2">
                      <img
                        src={Watch}
                        alt=""
                        className={`${styles.productImg} img-fluid p-2`}
                      />
                    </div>
                    <div className="col-10 g-0 ">
                      <div className="row">
                        <div className="col-9 mt-3">
                          <div className="text-secondary">Penawaran produk</div>
                          <div className="">Jam Tangan Casio</div>
                          <div className="">Rp 250.000</div>
                          <div className="">Ditawar Rp 200.000</div>
                        </div>
                        <div className="col-3 mt-3">
                          <div className="text-secondary">20 Apr, 14:04</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-2"></div>
                    <div className="row g-0 mt-3">
                      <div className="col-6"></div>
                      <div className="col-6 justify-content-end d-flex mb-3">
                        <button
                          className={`me-3 btn border-radius btn-light px-5 py-2 ${styles.btnEdit}`}
                        >
                          {accept ? "Status" : "Tolak"}
                        </button>
                        <button
                          className={
                            accept
                              ? "btn border-radius btn-register px-4 py-2"
                              : "btn border-radius btn-register px-5 py-2"
                          }
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          {accept ? (
                            <>
                              Hubungi di{" "}
                              <i className="fa-brands fa-whatsapp"></i>
                            </>
                          ) : (
                            "Terima"
                          )}
                        </button>

                        <>
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
                                    onClick={handleAccept}
                                  />
                                </div>
                                <div className="modal-body m-3 p-1">
                                  {accept ? (
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
                                          />
                                          <label
                                            className="form-check-label "
                                            htmlFor="exampleRadios1"
                                          >
                                            Berhasil terjual
                                          </label>
                                        </div>
                                        <div className="ms-4">
                                          Kamu telah sepakat menjual produk ini
                                          kepada pembeli
                                        </div>
                                      </div>

                                      <div className={`col-12 mb-3 mt-4 `}>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input custom-control-input"
                                            type="radio"
                                            name="exampleRadios"
                                            id="exampleRadios2"
                                            defaultValue="option1"
                                            defaultChecked=""
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="exampleRadios2"
                                          >
                                            Batalkan transaksi
                                          </label>
                                        </div>
                                        <div className="ms-4">
                                          Kamu membatalkan transaksi produk ini
                                          dengan pembeli
                                        </div>
                                      </div>
                                      <div className={`col-12 mb-3 mt-4`}>
                                        <button
                                          className={`btn border-radius btn-register  px-4 py-3 ${styles.btnEditModal}`}
                                        >
                                          Kirim
                                        </button>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <div className="fw-bold">
                                        Yeay kamu berhasil mendapat harga yang
                                        sesuai
                                      </div>
                                      <div className="text-secondary">
                                        Segera hubungi pembeli melalui whatsapp
                                        untuk transaksi selanjutnya
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
                                        <button
                                          className={`btn border-radius btn-register  px-4 py-3 ${styles.btnEditModal}`}
                                        >
                                          Hubungi via Whatsapp &nbsp;
                                          <i class="fa-brands fa-whatsapp"></i>
                                        </button>
                                      </div>
                                    </>
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

              {/* <div className="col-11 tes">
                <div className="border-offer mt-3">
                  <div className="row">
                    <div className="col-1 ps-4 pt-2">
                      <img src={Buyer} />
                    </div>
                    <div className="col-10 pt-2 ps-2">
                      <ul>
                        <li>Nama Pembeli</li>
                        <li>Kota</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-11 mt-4">
                    <p>Daftar Produkmu yang Ditawar</p>
                    <div className="row">
                      <div className="col-1">
                        <label>
                          <img src={Buyer} />
                        </label>
                      </div>
                      <div className="col-9">
                        <ul>
                          <li>Penawaran produk</li>
                          <li>Jam Tangan Casio</li>
                          <li>tes</li>
                        </ul>
                      </div>
                      <div className="col-1">
                        <p>tes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOffer;
