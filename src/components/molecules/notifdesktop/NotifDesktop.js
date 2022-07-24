import React from 'react';
import { Toast } from 'react-bootstrap';
import styles from './NotifDesktop.module.scss';
import { Link } from 'react-router-dom';
import zonk from '../../../assets/mailbox.png';
import BarLoader from 'react-spinners/BarLoader';
import { useSelector } from 'react-redux';

const NotifDesktop = ({ showA, toggleShowA, notif, idLogin }) => {
  let address;
  const notifRedux = useSelector((state) => state.notif);
  return (
    <Toast className={`${styles.cardNotif} p-1 bg-white`} show={showA} onClose={toggleShowA}>
      <Toast.Body>
        <div className={``} style={{ overflowX: 'hidden', maxHeight: '300px' }}>
          <div className="row">
            <p className="d-flex justify-content-end">Bersihkan</p>
          </div>
          <div className="row">
            {notifRedux.status === "loading" && (
              <BarLoader color={'#7126B5'} loading={true} size={100} className="mx-auto d-flex justify-content-center" />
            )}
          </div>
          <div className="row">
            {notif &&
              notif.map((notif, index) => {
                if (notif.status == 'created') {
                  address = '/product/' + notif.id_product;
                } else if (notif.id_buyer == idLogin) {
                  address = '/';
                } else {
                  address = `/offer/${notif.id}`;
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
                              {notif.status == 'created' && 'Berhasil diterbitkan'}
                              {notif.status !== 'created' && 'Penawaran produk'}
                            </div>
                            <div className="fw-bold">{notif.Product.product_name}</div>
                            <div
                              className="fw-bold"
                              style={{
                                textDecoration: notif.status == 'accept' ? 'line-through' : 'none',
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
                              {new Date(notif.createdAt).toLocaleString(
                                'en-GB',
                                {
                                  day: '2-digit',
                                  month: 'short',
                                  hour: 'numeric',
                                  minute: '2-digit',
                                }
                              )}
                              {/* <i
                                className="fa-solid fa-circle fa-xs"
                                style={{
                                  color: 'red',
                                }}
                              ></i> */}
                            </div>
                          </div>
                          {notif.status == 'accept' && (
                            <div className="text-secondary">
                              {idLogin !== notif.id_seller && 'Kamu akan dihubungi via WA'}
                              {idLogin == notif.id_seller && 'Kamu menerima penawaran ini'}
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
            {notif && notif.length == 0 && (
              <div className="d-flex justify-content-center">
                <img src={zonk} alt="kosong" className="img-fluid d-flex justify-content-center w-50" />
              </div>
            )}
          </div>
        </div>
      </Toast.Body>
    </Toast>
  );
};

export default NotifDesktop;
