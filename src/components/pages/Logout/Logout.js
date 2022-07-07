import React from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
  const removeToken = () => localStorage.removeItem('token');
  return (
    <div>
      Logout
      <Link to="/">
        <button onClick={removeToken}>Logout</button>
      </Link>
    </div>
  );
};

export default Logout;
