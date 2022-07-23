import React from 'react';
import { Toast } from 'react-bootstrap';
import styles from './UserMenu.module.scss';
// import '../Home.scss';
import { Link, useNavigate } from 'react-router-dom';
// import EditIcon from '../../../../assets/fi_edit.png';
import EditIcon from '../../../assets/fi_edit.png';
import Setting from '../../../assets/fi_settings.png';
import Bookmark from '../../../assets/fi_bookmark.png';
import LogOut from '../../../assets/fi_log-out.png';

const UserMenu = ({ showMenu, toggleMenu }) => {
  const navigate = useNavigate();
  return (
    <Toast
      className={`${styles.cardNotif} p-1 bg-white`}
      show={showMenu}
      onClose={toggleMenu}
    >
      <Toast.Body className=''>
        <div className="fw-bold mb-3">Akun Saya</div>
        <Link
          to="/profile"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <div className='row'>
            <div className='col-1 me-2'>
              <img
                src={EditIcon}
                // className={`${styles.icon} me-5`}
              />
            </div>
            <div className='col-9'>
              <p>Ubah Akun</p>
            </div>
            <hr></hr>
          </div>
        </Link>
        <div className='row'>
          <div className='col-1 me-2'>
            <img
              src={Setting}
            />
          </div>
          <div className='col-9'>
            <p>Pengaturan</p>
          </div>
          <hr></hr>
        </div>
        <Link
          to="/wishlist"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <div className='row'>            
            <div className='col-1 me-2'>
              <img
                src={Bookmark}
              />
            </div>
            <div className='col-9'>
              <p>Daftar Simpan</p>
            </div>
            <hr></hr>
          </div>
        </Link>
        <div className='row'
          onClick={(e) => {
            e.preventDefault();
            localStorage.removeItem('token');
            navigate('/login');
          }}
          style={{ cursor: 'pointer' }}
        >
          <div className='col-1 me-2'>
            <img
              src={LogOut}
            // style={styles.icon}
            />
          </div>
          <div className='col-9'>
            <p>Keluar</p>
          </div>
        </div>
        <div className="row justify-content-center">Verson 1.0.0</div>
      </Toast.Body>
    </Toast>
  );
};

export default UserMenu;
