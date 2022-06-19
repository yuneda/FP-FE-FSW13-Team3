import React, { useEffect } from 'react';
import ButtonCategory from '../../atoms/buttoncategory/ButtonCategory';
import watch from '../../../assets/watch.png';
import './ProductCategory.css';
import data from '../../../docs/product.json';

const ProductCategory = () => {
  return (
    <>
      <div className="container mt-5">
        <p className="title fw-bold">Telusuri Kategori</p>
        <ButtonCategory content="Semua" isActive={true} />
        <ButtonCategory content="Hobi" isActive={false} />
        <ButtonCategory content="Kendaraan" isActive={false} />
        <ButtonCategory content="Baju" isActive={false} />
        <ButtonCategory content="Elektronik" isActive={false} />
        <ButtonCategory content="Kesehatan" isActive={false} />
        <div className="row justify-content-start g-2 row-cols-lg-6 row-cols-md-4 row-cols-sm-2 row-cols-1 my-5">
          {data.map((data, index) => {
            return (
              <div key={index} className="col">
                <div className="card p-2">
                  <img src={watch} alt="" />
                  <p className="product-title mb-0">Jam Tangan Casio</p>
                  <p className="desc mb-0">Aksesoris</p>
                  <p className="price">RP 250.000</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
