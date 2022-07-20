import React from 'react';
import { Toast } from 'react-bootstrap';
import styles from '../Home.module.css';
import { Link, useNavigate } from 'react-router-dom';

const NotifDesktop = ({ showA, toggleShowA, notif, idLogin }) => {
  let address;
  return (
    <Toast
      className={`${styles.cardNotif} p-1 bg-white`}
      show={showA}
      onClose={toggleShowA}
    >
      <Toast.Body>
        <div className={``} style={{overflowX: "hidden", maxHeight: "300px"}}>
          <div className="row">
            {notif &&
              notif.map((notif, index) => {
                if (notif.status == 'created') {
                  address = 'product/' + notif.id_product;
                } else if (notif.id_buyer == idLogin) {
                  address = '/';
                } else {
                  address = `offer/${notif.id}`;
                }
                return (
                  <Link
                    key={index}
                    to={address}
                    style={{ color: 'inherit', textDecoration: 'inherit' }}
                  >
                    <div key={index} className="row">
                      <div className="col-3">
                        <img
                          src={notif.Product.image[0]}
                          alt=""
                          className={`${styles.productImg} img-fluid`}
                        />
                      </div>
                      <div className="col-9 g-0">
                        <div className="row">
                          <div className="col-7 g-0  ps-3">
                            <div className="text-secondary">
                              {notif.status == 'created' &&
                                'Berhasil diterbitkan'}
                              {notif.status !== 'created' && 'Penawaran produk'}
                            </div>
                            <div className="fw-bold">
                              {notif.Product.product_name}
                            </div>
                            <div
                              className="fw-bold"
                              style={{
                                textDecoration:
                                  notif.status == 'accept'
                                    ? 'line-through'
                                    : 'none',
                              }}
                            >
                              {Intl.NumberFormat('id-ID', {
                                style: 'currency',
                                currency: 'IDR',
                              }).format(notif.Product.product_price)}
                            </div>
                            {notif.status !== 'created' && (
                              <div className="fw-bold">
                                Ditawar{' '}
                                {Intl.NumberFormat('id-ID', {
                                  style: 'currency',
                                  currency: 'IDR',
                                }).format(notif.Offer.bid_price)}
                              </div>
                            )}
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
                          {notif.status == 'accept' && (
                            <div className="text-secondary">
                              {idLogin !== notif.id_seller &&
                                'Kamu akan dihubungi via WA'}
                              {idLogin == notif.id_seller &&
                                'Kamu menerima penawaran ini'}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-12">
                        <hr />
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </Toast.Body>
    </Toast>
  );
};

export default NotifDesktop;
