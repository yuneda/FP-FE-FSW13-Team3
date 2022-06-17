import React, { useState } from 'react';
import './Register.css';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import BgRegister from '../../../assets/bg-register.png';

const Register = () => {
  var registerImage = {
    backgroundImage: 'url(' + BgRegister + ')',
  };

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = (event) => {
    event.preventDefault();
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
  };
  return (
    <div className="container-fluid box">
      <div className="row">
        <div
          className="col-md-6 col-sm-12 col-12 left d-flex align-items-center"
          style={registerImage}
        >
          <div className="row justify-content-center">
            <div className="col-10 title-register">
              <h2 className="title-register">Second</h2>
            </div>
            <div className="col-10">
              <h2 className="title-register">Hand.</h2>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-12 right d-flex align-items-center">
          <form autoComplete="off">
            <div className="row w-100 justify-content-center">
              <div className="col-9 mb-3 text">
                <i className="bi bi-arrow-left" />
                <h1>Daftar</h1>
              </div>
              <div className="col-9">
                <label className="d-flex justify-content-between">Nama</label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="border-radius form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="col-9">
                <label className="d-flex justify-content-between">Email</label>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="border-radius form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="col-9">
                <label className="d-flex justify-content-between">
                  Password
                </label>
                <div className="input-group mb-3 wrapper">
                  <div className="input-field">
                    <input
                      type={type}
                      className="border-radius form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      autoComplete="off"
                    />
                    <button onClick={handleToggle}>
                      <Icon icon={icon} size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-9 mb-5">
                <button className="btn w-100 border-radius btn-register">
                  Daftar
                </button>
              </div>
              <div className="col-10 text-center">
                <p>
                  Sudah punya akun ?{' '}
                  <a
                    style={{ color: '#7126B5' }}
                    href=""
                    className="text-decoration-none"
                  >
                    Masuk di sini
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
