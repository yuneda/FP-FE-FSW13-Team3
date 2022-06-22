import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavbarProduct from '../../molecules/navbarproduct/NavbarProduct';
import styles from './ProductDetail.module.css';
import detailImg from '../../../assets/nothing.png';
import user from '../../../assets/user.jpg';
import SwiperProduct from '../../molecules/swiper/SwiperProduct';
import axios from 'axios';
import { useState } from 'react';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const token = localStorage.getItem('token');
  useEffect(() => {
    const url = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/product/' + id;

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setProduct(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log('error adalah', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <NavbarProduct />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            {product && (
              <div className="row">
                <div className="col-lg-8 col-md-12 mt-4">
                  <div className="carousel">
                    <SwiperProduct
                      imgProduct={product ? product.image : detailImg}
                    />
                  </div>
                </div>
                <div className={`col-lg-4 col-md-12 mt-4`}>
                  <div className={`card p-3 ${styles.cardDesc}`}>
                    <p className={styles.prodTitle}>{product.product_name}</p>
                    <p className="text-secondary">{product.category}</p>
                    <p>
                      {Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                      }).format(product.product_price)}
                    </p>
                    <button className={`${styles.btnPublish} mb-2`}>
                      Terbitkan
                    </button>
                    <button className={styles.btnEdit}>Edit</button>
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
                        <div className="fw-bold">{product.User.name}</div>
                        <div className="text-secondary">
                          {product.User.city}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12 mb-4">
                  <div className={`card p-4 mt-4 ${styles.cardDesc}`}>
                    <p className="fw-bold">Deskripsi</p>
                    <p className="fw-light text-secondary">
                      {product.description}
                    </p>
                    <p className="fw-light text-secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
