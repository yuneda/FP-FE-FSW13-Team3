import React, { useEffect, useState } from 'react';
import './Home.css';
import MyNavbar from '../../molecules/navbar/Navbar';
import MyCarousel from '../../molecules/carousel/MyCarousel';
import ProductCategory from '../../molecules/productcategory/ProductCategory';

let result;
const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const url = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/product';

    const fetchData = async () => {
      try {
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
  return (
    <>
      <MyNavbar />
      <MyCarousel />
      <ProductCategory product={data} />
    </>
  );
};

export default Home;
