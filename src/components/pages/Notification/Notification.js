import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import axios from 'axios';
import MyNavbar from '../../molecules/navbarProfile/OffcanvasProfile';
import { Link } from 'react-router-dom';
// import zonk from '../../../assets/mailbox.png';
// import BarLoader from 'react-spinners/BarLoader';
import { useSelector, useDispatch } from 'react-redux';
// import { isExpired } from 'react-jwt';
import { getAllNotif } from '../../../redux/notifSlice';

const Notification = () => {
  let address;
  const dispatch = useDispatch();
  // const product = useSelector((state) => state.product);
  const notifRedux = useSelector((state) => state.notif);
  const token = localStorage.getItem('token');
  // const tokenExpired = isExpired(token);
  // const [loading, setLoading] = useState(false);
  // const [notif, setNotif] = useState(null);
  const [idLogin, setIdLogin] = useState(null);
  // const { id } = useParams();
  // const [product, setProduct] = useState(null);
  useEffect(() => {
    const urlUser = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/user';

    const fetchData = async () => {
      try {
        if (token) {
          const responseUser = await axios.get(urlUser, {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          });
          setIdLogin(responseUser.data.data.id);
        }
      } catch (error) {
        console.log('error adalah', error);
      }
    };
    dispatch(getAllNotif(token));
    fetchData();
  }, []);
  return (
    <div className='container-fluid'>
      <MyNavbar title="Notifikasi" />
      <div className='row'>
        {notifRedux.data && notifRedux.data.map((notif, index) => {
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
              <div className="row" key={index}>
                <div className="col-3">
                  <img
                    src={notif.Product.image[0]}
                    alt=""
                    className={'rounded img-fluid'}
                  />
                </div>
                <div className="col-9 g-0">
                  <div className="row">
                    <div className="col-7 g-0  ps-3">
                      <div className="text-secondary">
                        {notif.status == 'created' &&
                          'Berhasil diterbitkan'}
                        {notif.status !== 'created' &&
                          'Penawaran produk'}
                      </div>
                      <div className="fw-bold">
                        {notif.Product.product_name}
                      </div>
                      <div
                        className="fw-bold"
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
          )
        })}

      </div>
    </div>

  )
}

export default Notification;