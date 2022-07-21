import React from 'react';
import Watch from '../../../../assets/watch-offer.png';
import { Toast } from 'react-bootstrap';
import styles from '../Product.module.css';

const NotifProduct = ({ showA, toggleShowA }) => {
  return (
    <Toast className={`${styles.cardNotif} p-1 bg-white`} show={showA} onClose={toggleShowA}>
      <Toast.Body>
        <div className={``}>
          <div className="row">
            <div className="col-3">
              <img src={Watch} alt="" className={`${styles.productImg} img-fluid`} />
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
              <img src={Watch} alt="" className={`${styles.productImg} img-fluid`} />
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
  );
};

export default NotifProduct;
