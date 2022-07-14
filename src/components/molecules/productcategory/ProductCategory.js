import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonCategory from '../../atoms/buttoncategory/ButtonCategory';
import watch from '../../../assets/watch.png';
import './ProductCategory.css';
import data from '../../../docs/product.json';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

const ProductCategory = ({ product, handleFilter, token }) => {
  const [all, setAll] = useState(true);
  const [hobby, setHobby] = useState(false);
  const [vehicle, setVehicle] = useState(false);
  const [shirt, setShirt] = useState(false);
  const [electronic, setElectronic] = useState(false);
  const [health, setHealth] = useState(false);
  const handleAll = (e) => {
    e.preventDefault();
    setAll(true);
    setHobby(false);
    setVehicle(false);
    setShirt(false);
    setElectronic(false);
    setHealth(false);
  };
  const handleHobby = (e) => {
    e.preventDefault();
    setAll(false);
    setHobby(true);
    setVehicle(false);
    setShirt(false);
    setElectronic(false);
    setHealth(false);
  };
  const handleVehicle = (e) => {
    e.preventDefault();
    setAll(false);
    setHobby(false);
    setVehicle(true);
    setShirt(false);
    setElectronic(false);
    setHealth(false);
  };
  const handleShirt = (e) => {
    e.preventDefault();
    setAll(false);
    setHobby(false);
    setVehicle(false);
    setShirt(true);
    setElectronic(false);
    setHealth(false);
  };
  const handleElectronic = (e) => {
    e.preventDefault();
    setAll(false);
    setHobby(false);
    setVehicle(false);
    setShirt(false);
    setElectronic(true);
    setHealth(false);
  };
  const handleHealth = (e) => {
    e.preventDefault();
    setAll(false);
    setHobby(false);
    setVehicle(false);
    setShirt(false);
    setElectronic(false);
    setHealth(true);
  };
  return (
    <>
      <div className="container mt-5" style={{ overflowX: 'auto' }}>
        <p className="title fw-bold">Telusuri Kategori</p>
        <div className="">
          <ScrollMenu>
            <ButtonCategory
              content="Semua"
              isActive={all ? true : false}
              handleFilter={handleFilter}
              changeActive={setAll}
              handleChange={handleAll}
            />
            <ButtonCategory
              content="Hobi"
              isActive={hobby ? true : false}
              handleFilter={handleFilter}
              changeActive={setHobby}
              handleChange={handleHobby}
            />
            <ButtonCategory
              content="Kendaraan"
              isActive={vehicle ? true : false}
              handleFilter={handleFilter}
              changeActive={setVehicle}
              handleChange={handleVehicle}
            />
            <ButtonCategory
              content="Baju"
              isActive={shirt ? true : false}
              handleFilter={handleFilter}
              changeActive={setShirt}
              handleChange={handleShirt}
            />
            <ButtonCategory
              content="Elektronik"
              isActive={electronic ? true : false}
              handleFilter={handleFilter}
              changeActive={setElectronic}
              handleChange={handleElectronic}
            />
            <ButtonCategory
              content="Kesehatan"
              isActive={health ? true : false}
              handleFilter={handleFilter}
              changeActive={setHealth}
              handleChange={handleHealth}
            />
          </ScrollMenu>
        </div>
        <div className="row justify-content-start g-2 row-cols-lg-6 row-cols-md-4 row-cols-sm-2 row-cols-1 my-5">
          {product &&
            product.map((data, index) => {
              return (
                <Link
                  key={index}
                  to={`product/${data.id}`}
                  style={{ color: 'inherit', textDecoration: 'inherit' }}
                >
                  <div key={index} className="col">
                    <div className="card p-2">
                      <img
                        src={data.image[0]}
                        alt=""
                        style={{
                          height: '97.1719px',
                          objectFit: 'cover',
                        }}
                      />
                      <p className="product-title mb-0">{data.product_name}</p>
                      <p className="desc mb-0">{data.category}</p>
                      <div className="row">
                        <div className="col-9">
                          <p className="price">
                            {Intl.NumberFormat('id-ID', {
                              style: 'currency',
                              currency: 'IDR',
                            }).format(data.product_price)}
                          </p>
                        </div>
                        <div className="col-3">
                          <i className="fa-regular fa-bookmark"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          {!product && <div>No found data</div>}
        </div>
      </div>
      <Link to={token ? '/create' : '/login'}>
        <ButtonCategory content="Jual" isActive={true} css="btn-sell d-block" />
      </Link>
    </>
  );
};

export default ProductCategory;
