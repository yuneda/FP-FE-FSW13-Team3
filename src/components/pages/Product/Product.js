import React, { useState, useEffect } from 'react';
import NavbarProduct from '../../molecules/navbarproduct/NavbarProduct';
import './Product.css';
import likeImage from '../../../assets/liked.png';
import ProductList from '../../molecules/productlist/ProductList';
import axios from 'axios';
import TabletView from '../Responsive/TabletView';
import DesktopView from '../Responsive/DesktopView';
import MobileView from '../Responsive/MobileView';
import MyNavbar from '../../molecules/navbarProfile/OffcanvasProfile';
import MyNavbarDesktop from '../../molecules/navbar/Navbar';
import UserMenu from '../Home/molecules/UserMenu';
import NotifDesktop from '../Home/molecules/NotifDesktop';
import NotifProduct from './molecules/NotifProduct';
import UserProduct from './molecules/UserProduct';
import Spinner from 'react-bootstrap/Spinner';
import { Toast } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { isExpired } from 'react-jwt';
import { queryProduct } from '../../../redux/productSlice';
import { getAllNotif } from '../../../redux/notifSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

const Product = () => {
  const product = useSelector((state) => state.product);
  const notifRedux = useSelector((state) => state.notif);
  const [data, setData] = useState([]);
  const [showA, setShowA] = useState(false);
  const [all, setAll] = useState(true);
  const [like, setLike] = useState(false);
  const [sold, setSold] = useState(false);
  const [user, setUser] = useState(null);
  const [notif, setNotif] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [idLogin, setIdLogin] = useState(null);
  const notDesktop = useMediaQuery({ query: '(max-width: 991px)' });
  const token = localStorage.getItem('token');
  const tokenExpired = isExpired(token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tabletView = useMediaQuery({ query: '(max-width: 991px)' });

  useEffect(() => {
    if (notifRedux.status == 'succeeded') {
      setNotif(notifRedux.data);
    }
    const data = { token, status: 'available' };
    dispatch(queryProduct(data));
    console.log(token);
    if (!token || tokenExpired) {
      navigate('/login');
    }
    const fetchDataUser = async () => {
      try {
        const url = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/user';
        const responseUser = await axios({
          method: 'get',
          url,
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });
        setUser(responseUser.data.data);
        console.log(responseUser.data.data);
      } catch (error) {
        console.log('error adalah', error);
      }
    };
    fetchDataUser();
  }, [token, tokenExpired, notifRedux]);

  // const toggleShowA = () => setShowA(!showA);
  const title = {
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '30px',
  };
  const colorActiveMobile = {
    color: 'white',
    backgroundColor: '#7126B5',
    borderRadius: '14px',
  };
  const colorInactiveMobile = {
    backgroundColor: '#E2D4F0',
    color: '#3C3C3C',
    borderRadius: '14px',
  };
  const colorActive = {
    color: '#7126B5',
    backgroundColor: 'white',
  };
  const colorInactive = {
    color: 'black',
    backgroundColor: 'white',
  };
  const handleAll = async () => {
    const data = { token, status: 'available' };
    dispatch(queryProduct(data));
    setAll(true);
    setLike(false);
    setSold(false);
  };
  const handleLike = async () => {
    const data = { token, status: 'interested' };
    dispatch(queryProduct(data));
    setAll(false);
    setLike(true);
    setSold(false);
  };
  const handleSold = async () => {
    const data = { token, status: 'sold' };
    dispatch(queryProduct(data));
    setAll(false);
    setLike(false);
    setSold(true);
  };
  const toggleMenu = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };
  const toggleShowA = async (e) => {
    e.preventDefault();
    dispatch(getAllNotif(token));
    setShowA(!showA);
  };

  return (
    <>
      <DesktopView>
        <MyNavbarDesktop
          token={token}
          tokenExpired={tokenExpired}
          onToggleClick={toggleShowA}
          onToggleMenu={toggleMenu}
        />
      </DesktopView>
      <TabletView>
        <MyNavbar title="Daftar Jual Saya" />
      </TabletView>
      <MobileView>
        <MyNavbar title="Daftar Jual Saya" />
      </MobileView>

      <div className="container position-relative">
        <UserMenu showMenu={showMenu} toggleMenu={toggleMenu} />
        <NotifDesktop idLogin={idLogin} notif={notif} toggleShowA={toggleShowA} showA={showA} />
      </div>

      <div className="container position-relative">
        {/* <NotifProduct showA={showA} toggleShowA={toggleShowA} /> */}
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="col-12 mt-4 mb-3">
              <h2 style={title}>{notDesktop ? '' : 'Daftar Jual Saya'}</h2>
            </div>
            <div className="col-12">
              <div className="card card-user p-2 ">
                {user && <UserProduct user={user} />}
                {!user && <Spinner animation="border" variant="secondary" />}
              </div>
            </div>
            <div className="col-12 my-3">
              <div className="row">
                {/* Mobile */}
                <div className="btn-carousel w-100">
                  {/* <ButtonCarousel /> */}
                  {tabletView && (
                    <>
                      <button onClick={handleAll} className="btn-category-product-mobile me-2">
                        <div
                          className="d-flex justify-content-between px-3 py-2"
                          style={all ? colorActiveMobile : colorInactiveMobile}
                        >
                          <div>
                            <i className="bi bi-box me-2"></i>Produk
                          </div>
                        </div>
                      </button>
                      <button onClick={handleLike} className="btn-category-product-mobile me-2">
                        <div
                          className="d-flex justify-content-between px-3 py-2"
                          style={like ? colorActiveMobile : colorInactiveMobile}
                        >
                          <div>
                            <i className="me-2 fa-regular fa-heart"></i>
                            Diminati
                          </div>
                        </div>
                      </button>
                      <button onClick={handleSold} className="btn-category-product-mobile me-2">
                        <div
                          className="d-flex justify-content-between px-3 py-2"
                          style={sold ? colorActiveMobile : colorInactiveMobile}
                        >
                          <div>
                            <i className="fa-regular fa-dollar-sign me-2"></i>
                            Terjual
                          </div>
                        </div>
                      </button>
                    </>
                  )}
                </div>
                {!tabletView && (
                  <div className="col-12 col-lg-3">
                    {/* <ProductCatDesk /> */}

                    {/* Website */}
                    <div className="card-category card p-4">
                      <p className="name-user mb-3">Kategori</p>
                      <>
                        <button onClick={handleAll} className="bg-white">
                          <div
                            className="d-flex justify-content-between"
                            style={all ? colorActive : colorInactive}
                          >
                            <div>
                              <i className="me-2 fa-regular fa-user"></i>Semua Produk
                            </div>
                            <div>
                              <i className="fa-solid fa-angle-right"></i>
                            </div>
                          </div>
                        </button>
                        <hr />
                        <button onClick={handleLike} className="bg-white">
                          <div
                            className="d-flex justify-content-between"
                            style={like ? colorActive : colorInactive}
                          >
                            <div>
                              <i className="me-2 fa-solid fa-heart"></i>
                              Diminati
                            </div>
                            <div>
                              <i className="fa-solid fa-angle-right"></i>
                            </div>
                          </div>
                        </button>
                        <hr />
                        <button onClick={handleSold} className="bg-white">
                          <div
                            className="d-flex justify-content-between"
                            style={sold ? colorActive : colorInactive}
                          >
                            <div>
                              <i className="me-2 fa-solid fa-dollar-sign"></i>
                              Terjual
                            </div>
                            <div>
                              <i className="fa-solid fa-angle-right"></i>
                            </div>
                          </div>
                        </button>
                      </>
                    </div>
                  </div>
                )}
                {/* Website */}
                <div className="col-12 col-lg-9">
                  {all && product.data && <ProductList product={product.data} action={true} />}
                  {(all || like || sold) && product.data.length == 0 && (
                    <div className="text-center">
                      <img src={likeImage} alt="" className="" />
                    </div>
                  )}
                  {like && product.data && <ProductList product={product.data} />}
                  {sold && product.data && <ProductList product={product.data} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
