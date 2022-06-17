import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import BgLogin from '../../../../src/assets/bg-login.png';
import './Login.css';

const Login = () => {
  var sectionStyle = {
    backgroundImage: 'url(' + BgLogin + ')',
    backgroundRepeat: 'no-repeat',
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
          style={sectionStyle}
        >
          <div className="row justify-content-center">
            <div className="col-10 title-login">
              <h2 className="title-login">Second</h2>
            </div>
            <div className="col-10">
              <h2 className="title-login">Hand.</h2>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-12 right d-flex align-items-center">
          <div>
            <div className="row w-100 justify-content-center">
              <div className="col-9 mb-3">
                <i className="bi bi-arrow-left" />
                <h1>Masuk</h1>
              </div>
              <div className="col-9">
                <label>Email</label>
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
                <button className="btn w-100 border-radius btn-login">
                  Masuk
                </button>
              </div>
              <div className="col-9 text-center">
                <p>
                  Belum punya akun ?{' '}
                  <a
                    style={{ color: '#7126B5' }}
                    href
                    className="text-decoration-none"
                  >
                    Daftar di sini
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
