import React from 'react';
import { Link } from 'react-router-dom';

const UserProduct = ({ user }) => {
  return (
    <div className="d-flex justify-content-start align-items-center">
      <div className="col-3 col-md-1 me-2 ">
        <img src={user.image} className="w-100 img-user img-fluid" />
      </div>
      <div className="col-md-10 col-6 ">
        <div>
          <p className="name-user">{user.name}</p>
          <p className="address-user">{user.city}</p>
        </div>
      </div>
      <div className="col-2 col-md-1 ">
        <Link to="/profile">
          <button className="btn-edit">Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default UserProduct;
