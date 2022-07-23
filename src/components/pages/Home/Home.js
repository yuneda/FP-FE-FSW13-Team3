import React, { useEffect, useState } from 'react';
import MyNavbar from '../../molecules/navbar/Navbar';
import MyCarousel from '../../molecules/carousel/MyCarousel';
import ProductCategory from '../../molecules/productcategory/ProductCategory';
import { isExpired } from 'react-jwt';
import { useMediaQuery } from 'react-responsive';
import UserMenu from '../../molecules/usermenu/UserMenu';
import NotifDesktop from '../../molecules/notifdesktop/NotifDesktop';

import { getAllNotif } from '../../../redux/notifSlice';
import { authUser } from '../../../redux/usersSlice';
import { filterProduct, searchProduct } from '../../../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const notifRedux = useSelector((state) => state.notif);
  const user = useSelector((state) => state.users);
  const token = localStorage.getItem('token');
  const tokenExpired = isExpired(token);
  const [notif, setNotif] = useState(null);
  const [search, setSearch] = useState('');
  const [showA, setShowA] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [idLogin, setIdLogin] = useState(null);
  const mobileView = useMediaQuery({ query: '(max-width: 767px)' });
  const toggleMenu = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };
  const toggleShowA = async (e) => {
    e.preventDefault();
    dispatch(getAllNotif(token));
    setShowA(!showA);
  };
  useEffect(() => {
    if (notifRedux.status == 'succeeded') {
      setNotif(notifRedux.data);
    }
    if (!tokenExpired && token) {
      dispatch(authUser(token));
    }
    if (user.auth) {
      setIdLogin(user.auth.id);
    }
  }, [notifRedux]);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleFilter = async (e, filter) => {
    e.preventDefault();
    dispatch(filterProduct(filter));
  };
  const handleSubmitSearch = async (e) => {
    e.preventDefault();
    dispatch(searchProduct(search));
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
      {mobileView ? '' :
      <div className="container position-relative">
        <UserMenu showMenu={showMenu} toggleMenu={toggleMenu} />
        <NotifDesktop idLogin={idLogin} notif={notif} toggleShowA={toggleShowA} showA={showA} />
      </div>
      // : ''
      }
      <div className={mobileView ? '' : 'mt-5'}>
        <MyCarousel />
      </div>
      <ProductCategory handleFilter={handleFilter} token={token} />
    </>
  );
};

export default Home;
