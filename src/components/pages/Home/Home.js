import React from 'react';
import './Home.css';
import MyNavbar from '../../molecules/navbar/Navbar';
import MyCarousel from '../../molecules/carousel/MyCarousel';
import ProductCategory from '../../molecules/productcategory/ProductCategory';

const Home = () => {
  // useEffect(() => {
  //   const url = 'https://jsonplaceholder.typicode.com/todos';

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const json = await response.json();
  //       console.log(json);
  //     } catch (error) {
  //       console.log('error adalah', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <>
      <MyNavbar />
      <MyCarousel />
      <ProductCategory />
    </>
  );
};

export default Home;
