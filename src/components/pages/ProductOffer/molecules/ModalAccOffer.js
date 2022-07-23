import React from 'react';
import Buyer from '../../../../assets/buyer.png';
import Watch from '../../../../assets/watch-offer.png';
import styles from '../ProductOffer.module.scss';

const ModalAccOffer = () => {
  return (
    <>
      <div className="fw-bold">
        Yeay kamu berhasil mendapat harga yang sesuai
      </div>
      <div className="text-secondary">
        Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
      </div>
      <div className={`row mt-3 ${styles.modalBg}`}>
        <div className="col-12 fw-bold text-center">Product Match</div>
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
              <div className="fw-bold">Nama Penjual</div>
              <div className="text-secondary">Kota</div>
            </div>
          </div>
          <div className={`${styles.cardOffer}`}>
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
                    <div className="">Jam Tangan Casio</div>
                    <div className="">
                      Rp <s>250.000</s>
                    </div>
                    <div className="">Ditawar Rp 200.000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`col-12 mb-3 mt-4`}>
        <a href="https://wa.me/+628980023612" rel="noopener noreferrer" target="_blank">
          <button
            className={`btn border-radius btn-register  px-4 py-3 ${styles.btnEditModal}`}
          >
            Hubungi via Whatsapp &nbsp;
            <i className="fa-brands fa-whatsapp"></i>
          </button>
        </a>
      </div>
    </>
  );
};

export default ModalAccOffer;
