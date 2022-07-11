import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import likeImage from '../../../assets/liked.png';
import CardCarousel from './CardCarousel';
import './Carousel.css';
import MyButtonCategory from '../../atoms/buttoncategory/MyButtonCategory';
import ProductList from '../../molecules/productlist/ProductList';
import axios from 'axios';

const Carousel = () => {
  const [data, setData] = useState([]);
  const [all, setAll] = useState(false);
  const [like, setLike] = useState(false);
  const [sold, setSold] = useState(false);
  const token = localStorage.getItem('token');

  const handleAll = async () => {
    const url = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/allproduct';
    try {
      const response = await axios({
        method: 'post',
        url,
        data: {
          status: 'available',
        },
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      setData(response.data.data.product);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setAll(true);
    setLike(false);
    setSold(false);
  };
  const handleLike = async () => {
    const url = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/allproduct';
    try {
      const response = await axios({
        method: 'post',
        url,
        data: {
          status: 'interested',
        },
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      setData(response.data.data.product);
      console.log(response);
      console.log('like berhasil');
    } catch (error) {
      console.log('like gagal');
      console.log(error);
    }
    setAll(false);
    setLike(true);
    setSold(false);
  };
  const handleSold = async () => {
    const url = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/allproduct';
    try {
      const response = await axios({
        method: 'post',
        url,
        data: {
          status: 'sold',
        },
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      setData(response.data.data.product);
      console.log(response.data.data.product);
      console.log('sold berhasil');
    } catch (error) {
      console.log('sold gagal');
      console.log(error);
    }
    setAll(false);
    setLike(false);
    setSold(true);
  };

  const resp = {
    0: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  };
  const styleItem = {
    height: '350px',
    width: '400px',
  };
  const carouselContainer = {};
  return (
    <>
      <OwlCarousel
        className="owl-theme mt-2"
        // loop={true}
        margin={5}
        // nav={true}
        // center={true}
        dots={false}
        responsive={resp}
      // style={{
      //   border: '1px solid blue',
      // }}
      >
        <MyButtonCategory
          content="Product"
          // isActive={all ? true : false}
          handleFilter={handleAll}
          changeActive={setAll}
          handleChange={handleAll}
        />
        <MyButtonCategory
          content="Diminati"
          // isActive={like ? true : false}
          handleFilter={handleLike}
          changeActive={setLike}
          handleChange={handleLike}
        />
        <MyButtonCategory
          content="Terjual"
          // isActive={sold ? true : false}
          handleFilter={handleSold}
          changeActive={setSold}
          handleChange={handleSold}
        />
      </OwlCarousel>
      <div className="col-9">
        {all && <ProductList product={data} action={true} />}
        {like && !data && (
          <div className="text-center">
            <img src={likeImage} alt="" className="" />
          </div>
        )}
        {like && data.length > 0 && <ProductList product={data} />}
        {sold && data.length > 0 && <ProductList product={data} />}
      </div>
    </>
  );
};

export default Carousel;
