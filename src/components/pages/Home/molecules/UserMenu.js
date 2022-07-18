import React from 'react';
import { Toast } from 'react-bootstrap';
import styles from '../Home.module.css';
import { Link, useNavigate } from 'react-router-dom';

const UserMenu = ({ showMenu, toggleMenu }) => {
  const navigate = useNavigate();
  return (
    <Toast
      className={`${styles.cardNotif} p-1 bg-white`}
      show={showMenu}
      onClose={toggleMenu}
    >
      <Toast.Body>
        <div className="fw-bold">Akun Saya</div>
        <Link
          to="/profile"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <div>
            <i
              className="fa-regular fa-bookmark me-2"
              style={{ color: '#7126B5' }}
            ></i>
            Ubah Akun
          </div>
        </Link>
        <div>
          <i className="fa-solid fa-gear me-2" style={{ color: '#7126B5' }}></i>
          Pengaturan
        </div>
        <Link
          to="/wishlist"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <div>
            <i
              className="fa-regular fa-bookmark me-2"
              style={{ color: '#7126B5' }}
            ></i>
            Daftar Simpan
          </div>
        </Link>
        <div
          onClick={(e) => {
            e.preventDefault();
            localStorage.removeItem('token');
            navigate('/login');
          }}
          style={{ cursor: 'pointer' }}
        >
          <i
            className="fa-regular fa-bookmark me-2"
            style={{ color: '#7126B5' }}
          ></i>
          Keluar
        </div>
        <div className="row justify-content-center">Verson 1.0.0</div>
      </Toast.Body>
    </Toast>
  );
};

export default UserMenu;
