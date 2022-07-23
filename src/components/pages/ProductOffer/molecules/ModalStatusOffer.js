import React from 'react';
import styles from '../ProductOffer.module.scss';

const ModalStatusOffer = (props) => {
  return (
    <>
      <div className="fw-bold">Perbarui status penjualan produkmu</div>

      <div className={`col-12 mb-3 mt-4`}>
        <div className="form-check">
          <input
            className="form-check-input custom-control-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            defaultValue="option1"
            defaultChecked=""
            // onClick={() => setStatus('sold')}
            onClick={props.sold}
          />
          <label className="form-check-label " htmlFor="exampleRadios1">
            Berhasil terjual
          </label>
        </div>
        <div className="ms-4">
          Kamu telah sepakat menjual produk ini kepada pembeli
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
            // onClick={() => setStatus('reject')}
            onClick={props.reject}
          />
          <label className="form-check-label" htmlFor="exampleRadios2">
            Batalkan transaksi
          </label>
        </div>
        <div className="ms-4">
          Kamu membatalkan transaksi produk ini dengan pembeli
        </div>
      </div>
      <div className={`col-12 mb-3 mt-4`}>
        <button
          className={`btn border-radius btn-register  px-4 py-3 ${styles.btnEditModal}`}
          onClick={props.handleStatus}
        >
          Kirim
        </button>
      </div>
    </>
  );
};

export default ModalStatusOffer;
