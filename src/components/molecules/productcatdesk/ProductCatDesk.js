import React from 'react';

const ProductCatDesk = () => {
  const colorActive = {
    color: '#7126B5',
  };
  return (
    <>
      <div className="card-category card p-4">
        <p className="name-user mb-3">Kategori</p>
        <button className="btn-category-product">
          <div className="d-flex justify-content-between" style={colorActive}>
            <div>
              <i className="me-2 fa-regular fa-user"></i>Semua Produk
            </div>
            <div>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </button>
        <hr />
        <button className="btn-category-product">
          <div className="d-flex justify-content-between">
            <div>
              <i className="me-2 fa-light fa-heart"></i>Diminati
            </div>
            <div>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </button>
        <hr />
        <button className="btn-category-product">
          <div className="d-flex justify-content-between">
            <div>
              <i className="me-2 fa-solid fa-dollar-sign"></i>
              Terjual
            </div>
            <div>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default ProductCatDesk;
