import React, { useState, useEffect } from 'react';
import MyNavbar from '../../molecules/navbarProfile/NavbarProfile';
import axios from 'axios';
import ProductWishlist from '../../molecules/productwishlist/ProductWishlist';
import data from '../../../docs/product.json';
import './Whislist.css';

import { useParams, Link } from 'react-router-dom';

const Whislist = () => {

  return (
    <>
      <MyNavbar title="Daftar Simpan" />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12 col-12 right d-flex">
            <div className="row w-100 justify-content-center">
              <div className="col-1 mt-5">
                <Link to='/'>
                  <i className=" fa-solid fa-arrow-left"></i>
                </Link>
              </div>
              <div className="col-10 mt-5">
                <ProductWishlist />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Whislist;