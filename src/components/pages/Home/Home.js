import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import styles from './Home.module.css';
import Watch from '../../../assets/watch-offer.png';
import MyNavbar from '../../molecules/navbar/Navbar';
import MyCarousel from '../../molecules/carousel/MyCarousel';
import ProductCategory from '../../molecules/productcategory/ProductCategory';
import { Toast } from 'react-bootstrap';
import { Link } from 'react-router-dom';

let result;
const Home = () => {
  const token = localStorage.getItem('token');
  const [data, setData] = useState(null);
  const [notif, setNotif] = useState(null);
  const [search, setSearch] = useState('');
  const [showA, setShowA] = useState(false);
  const [idLogin, setIdLogin] = useState(null);
  const toggleShowA = async (e) => {
    e.preventDefault();
    try {
      const url = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/notif';
      let response = await axios({
        method: 'get',
        url,
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      response = response.data.data.data;
      console.log(response);
      setNotif(response);
      console.log(notif);
    } catch (error) {
      console.log(error.message);
    }
    setShowA(!showA);
  };
  useEffect(() => {
    const url = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/product';
    const urlUser = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/user';

    const fetchData = async () => {
      try {
        const responseUser = await axios.get(urlUser, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });
        setIdLogin(responseUser.data.data.id);
        const response = await fetch(url);
        const json = await response.json();
        result = json.data.product.data;
        setData(result);
      } catch (error) {
        console.log('error adalah', error);
      }
    };

    fetchData();
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleFilter = async (e, filter) => {
    e.preventDefault();
    const url = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/product';
    const response = await axios({
      method: 'get',
      url,
      params: {
        filter,
      },
    });
    console.log(response.data.data.product);
    setData(response.data.data.product.data);
  };
  const handleSubmitSearch = async (e) => {
    e.preventDefault();
    console.log(search);
    const url =
      'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/product/search?name=' +
      search;
    const response = await axios.post(url);
    console.log(response.data.data.product.data);
    setData(response.data.data.product.data);
  };
  return (
    <>
      <MyNavbar
        search={search}
        handleSearch={handleSearch}
        handleSubmitSearch={handleSubmitSearch}
        token={token}
        onToggleClick={toggleShowA}
      />
      <div className="container position-relative">
        <Toast
          className={`${styles.cardNotif} p-1 bg-white`}
          show={showA}
          onClose={toggleShowA}
        >
          <Toast.Body>
            <div className={``}>
              <div className="row">
                {notif &&
                  notif.map((notif, index) => (
                    <Link
                      key={index}
                      to={notif.id_buyer == idLogin ? '/' : `offer/${notif.id}`}
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
                                {notif.status !== 'created' &&
                                  'Penawaran produk'}
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
                                Kamu akan dihubungi via WA
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="col-12">
                          <hr />
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </Toast.Body>
        </Toast>
      </div>
      <MyCarousel />
      <ProductCategory
        product={data}
        handleFilter={handleFilter}
        token={token}
      />
    </>
  );
};

export default Home;
