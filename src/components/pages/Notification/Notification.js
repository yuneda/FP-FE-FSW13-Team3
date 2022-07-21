import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Watch from '../../../assets/watch-offer.png';
import MyNavbar from '../../molecules/navbarProfile/OffcanvasProfile';
import MailBox from '../../../assets/mailbox.png';
import { Link, useNavigate } from 'react-router-dom';
import zonk from '../../../assets/mailbox.png';
import BarLoader from 'react-spinners/BarLoader';
import { useSelector, useDispatch } from 'react-redux';

const Notification = (notif) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className='container-fluid'>
      <MyNavbar title="Notifikasi" />
      <div className='row'>
        {console.log(notif)}
        {/* {notif && notif.map((notif, index) => {
          if (notif.status == 'created') {
            address = 'product/' + notif.id_product;
          } else if (notif.id_buyer == idLogin) {
            address = '/';
          } else {
            address = `offer/${notif.id}`;
          }
          return(

          )
        })} */}
        <div className="row tes">
          <div className="col-3">
            <img
              // src={notif.Product.image[0]}
              src={Watch}
              alt=""
              className={'rounded img-fluid'}
            />
          </div>
          <div className="col-9 g-0">
            <div className="row">
              <div className="col-7 g-0  ps-3">
                <div className="text-secondary">
                  <p>Status Produk</p>
                  {/* {notif.status == 'created' &&
                    'Berhasil diterbitkan'}
                  {notif.status !== 'created' &&
                    'Penawaran produk'} */}
                </div>
                <div className="fw-bold">
                  <p>Nama Produk</p>
                  {/* {notif.Product.product_name} */}
                </div>
                <div
                  className="fw-bold"
                // style={{
                //   textDecoration:
                //     notif.status == 'accept'
                //       ? 'line-through'
                //       : 'none',
                // }}
                >
                  <p>200.000</p>
                  {/* {Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  }).format(notif.Product.product_price)} */}
                </div>
                {/* {notif.status !== 'created' && (
                  <div className="fw-bold">
                    Ditawar{' '}
                    {Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                    }).format(notif.Offer.bid_price)}
                  </div>
                )} */}
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
              {/* {notif.status == 'accept' && ( */}
              <div className="text-secondary">
                <p>Kamu menerima penawaran ini</p>
                {/* {idLogin !== notif.id_seller &&
                    'Kamu akan dihubungi via WA'}
                  {idLogin == notif.id_seller &&
                    'Kamu menerima penawaran ini'} */}
              </div>
              {/* )} */}
            </div>
          </div>

          <div className="col-12">
            <hr />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Notification;