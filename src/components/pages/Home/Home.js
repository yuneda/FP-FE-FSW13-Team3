import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import "./Home.css";
import './Home.scss';
import Watch from '../../../assets/watch-offer.png';
import MyNavbar from '../../molecules/navbar/Navbar';
import MyCarousel from '../../molecules/carousel/MyCarousel';
import ProductCategory from '../../molecules/productcategory/ProductCategory';
import { Toast } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import MobileView from '../Responsive/MobileView';
import TabletView from '../Responsive/TabletView';
import DesktopView from '../Responsive/DesktopView';
import { decodeToken, isExpired } from 'react-jwt';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { useMediaQuery } from 'react-responsive';
import UserMenu from './molecules/UserMenu';
import NotifDesktop from './molecules/NotifDesktop';

let result;
const Home = () => {
  const token = localStorage.getItem('token');
  const tokenExpired = isExpired(token);
  const [data, setData] = useState(null);
  const [notif, setNotif] = useState(null);
  const [search, setSearch] = useState('');
  const [showA, setShowA] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [idLogin, setIdLogin] = useState(null);
  const notDesktop = useMediaQuery({ query: '(max-width: 991px)' });
  const mobileView = useMediaQuery({ query: '(max-width: 767px)' });
  const navigate = useNavigate();
  const toggleMenu = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };
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
        if (!tokenExpired && token) {
          const responseUser = await axios.get(urlUser, {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          });
          setIdLogin(responseUser.data.data.id);
        }
        const response = await axios.get(url);
        result = response.data.data.product.data;
        console.log(result);
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
        onToggleMenu={toggleMenu}
        tokenExpired={tokenExpired}
      />
      <div className="container position-relative">
        <UserMenu showMenu={showMenu} toggleMenu={toggleMenu} />
        <NotifDesktop
          idLogin={idLogin}
          notif={notif}
          toggleShowA={toggleShowA}
          showA={showA}
        />
      </div>
      <div className={mobileView ? '' : 'mt-5'}>
        <MyCarousel />
      </div>
      <ProductCategory
        product={data}
        handleFilter={handleFilter}
        token={token}
      />
    </>
  );
};

export default Home;
