import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import MyNavbar from '../../molecules/navbar/Navbar';
import MyCarousel from '../../molecules/carousel/MyCarousel';
import ProductCategory from '../../molecules/productcategory/ProductCategory';

let result;
const Home = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');
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
      />
      <MyCarousel />
      <ProductCategory product={data} handleFilter={handleFilter} />
    </>
  );
};

export default Home;
