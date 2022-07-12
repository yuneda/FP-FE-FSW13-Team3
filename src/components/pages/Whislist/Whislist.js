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
      {/* <div className="container row">
        <div className='col-3'>
        
        </div>
        <div className='col-9'>
        
        </div>
      <ProductWishlist />
        {all && <ProductList product={data} action={true} />}
        {like && !data && (
          <div className="text-center">
            <img src={likeImage} alt="" className="" />
          </div>
        )}
        {like && data.length > 0 && <ProductList product={data} />}
        {sold && data.length > 0 && <ProductList product={data} />}
      </div> */}

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12 col-12 right d-flex">
            <div className="row w-100 justify-content-center">
              <div className="col-1 mt-5">
                <i className=" fa-solid fa-arrow-left"></i>
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