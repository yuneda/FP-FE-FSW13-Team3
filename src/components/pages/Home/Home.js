import React from 'react';
import './Home.css';
import MyNavbar from '../../molecules/navbar/Navbar';
import MyCarousel from '../../molecules/carousel/MyCarousel';
import ProductCategory from '../../molecules/productcategory/ProductCategory';

const Home = () => {
  return (
    <>
      <MyNavbar />
      <MyCarousel />
      <ProductCategory />
    </>
  );
};

export default Home;
