import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PicInput from '../../../assets/fi_camera.png';
import PenLine from '../../../assets/fi_edit.png';
import Setting from '../../../assets/fi_settings.png';
import LogOut from '../../../assets/fi_log-out.png';
import Home from '../../../assets/fi_home.png';
import Bell from '../../../assets/fi_bell.png';
import PlusCircle from '../../../assets/fi_plus-circle.png';
import List from '../../../assets/fi_list.png';
import User from '../../../assets/fi_user.png';
import { Link, useNavigate } from 'react-router-dom';
import './MyAccount.css';

const MyAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid box">
      <div className='row mx-2 py-4'>
        <h4 className='fw-bold'>Akun Saya</h4>
      </div>
      <div className='row justify-content-center d-flex mb-5 p-3'>
        <div className="text-center img-account py-2">
          <img
            src={PicInput}
            className='m-4'
            style={{
              width: '26px',
              height: '26px',
            }}
          />
        </div>
      </div>
      <Link to="/profile" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div className='row px-4'>
          <div className='col-2'>
            <img
              src={PenLine}
              style={{
                height: '24px',
                width: '24px',
                left: '0',
                top: '0',
              }}
            />
          </div>
          <div className='col-9'>
            <p className='fw-bold'>Ubah Akun</p>
          </div>
          <hr></hr>
        </div>
      </Link>
      <div className='row px-4'>
        <div className='col-2'>
          <img
            src={Setting}
            style={{
              height: '24px',
              width: '24px',
              left: '0',
              top: '0',
            }}
          />
        </div>
        <div className='col-9'>
          <p className='fw-bold'>Pengaturan Akun</p>
        </div>
        <hr></hr>
      </div>
      <div className='row px-4'
        onClick={(e) => {
          e.preventDefault();
          localStorage.removeItem('token');
          navigate('/login');
        }}
        style={{ cursor: 'pointer' }}
      >
        <div className='col-2'>
          <img
            src={LogOut}
            style={{
              height: '24px',
              width: '24px',
              left: '0',
              top: '0',
            }}
          />
        </div>
        <div className='col-9'>
          <p className='fw-bold'>Keluar</p>
        </div>
        <hr></hr>
      </div>
      <div className='row px-4'>
        <p className='text-version'>Version 1.0.0</p>
      </div>
      <div className='row sticky border'>
        <Link className='col' to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <div style={{width: '50px'}}>
            <div className='row m-auto'>
              <img
                src={Home}
                alt=""
              />
            </div>
            <div className='row'>
              <p className='nav-text'>Home</p>
            </div>
          </div>
        </Link>
        <Link className='col' to="/notification" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div style={{width: '50px'}}>
          <div className='row m-auto'>
            <img
              src={Bell}
              alt=""
            />
          </div>
          <div className='row'>
            <p className='nav-text'>Notifikasi</p>
          </div>
        </div>
        </Link>
        <Link className='col' to="/create" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div style={{width: '50px'}}>
          <div className='row m-auto'>
            <img
              src={PlusCircle}
              alt=""
            />
          </div>
          <div className='row'>
            <p className='nav-text'>Jual</p>
          </div>
        </div>
        </Link>
        <Link className='col' to="/product" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div style={{width: '50px'}}>
          <div className='row m-auto'>
            <img
              src={List}
              alt=""
            />
          </div>
          <div className='row'>
            <p className='nav-text'>Daftar Jual</p>
          </div>
        </div>
        </Link>
        <Link className='col' to="/myaccount" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div style={{width: '50px'}}>
          <div className='row m-auto'>
            <img
              src={User}
              alt=""
            />
          </div>
          <div className='row'>
            <p className='nav-text'>Akun</p>
          </div>
        </div>
        </Link>
        
      </div>
    </div>
  )
}

export default MyAccount;