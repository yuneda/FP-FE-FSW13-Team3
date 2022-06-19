import React from 'react';
import NavbarProduct from '../../molecules/navbarproduct/NavbarProduct';
import './Product.css';
import userImage from '../../../assets/user.jpg';
import ProductCatDesk from '../../molecules/productcatdesk/ProductCatDesk';
import ProductList from '../../molecules/productlist/ProductList';

const Product = () => {
  const title = {
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '30px',
  };

  return (
    <>
      <NavbarProduct />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="col-12 mt-4 mb-3">
              <h2 style={title}>Daftar Jual Saya</h2>
            </div>
            <div className="col-12">
              <div className="card card-user p-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="col me-2">
                    <img src={userImage} className="w-100 img-user" />
                  </div>
                  <div className="col-10">
                    <div>
                      <p className="name-user">Nama Penjual</p>
                      <p className="address-user">kota</p>
                    </div>
                  </div>
                  <div className="col">
                    <button className="btn-edit">Edit</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 my-3">
              <div className="row">
                <div className="col-3">
                  <ProductCatDesk />
                </div>
                <div className="col-9">
                  <ProductList />
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
