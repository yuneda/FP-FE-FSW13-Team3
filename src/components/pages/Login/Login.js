import React, { useState, useEffect } from 'react';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import BgLogin from '../../../../src/assets/bg-login.png';
// import "./Login.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStatusIdle } from '../../../redux/usersSlice';
import './Login.scss';

import {
  loginUser,
} from '../../../redux/usersSlice';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(makeStatusIdle());
    if (user.status == 'succeeded') {
      navigate('/');
    }
    console.log('yuneda');
  }, [dispatch, user]);

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    // try {
    const data = {
      email,
      password,
    };
    dispatch(loginUser(data));
  };

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

  var sectionStyle = {
    backgroundImage: 'url(' + BgLogin + ')',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="container-fluid box">
      {/* {user.status == 'succeeded' && navigate('/')} */}
      <div className="row">
        <div
          className="col-md-6 col-sm-12 col-12 left d-flex align-items-center fit-image"
          style={sectionStyle}
        >
          <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <div className="row justify-content-center">
              <div className="col-10 title-login">
                <h2 className="title-login">Second</h2>
              </div>
              <div className="col-sm-10">
                <h2 className="title-login">Hand.</h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-6 col-sm-12 col-12 right d-flex align-items-center">
          <div className="fit-form-login">
            <div className="row w-100 justify-content-center">
              <div className="col-sm-9 mb-3">
                <i
                  className="fit-font fa-solid fa-arrow-left mb-5"
                  style={{ marginTop: '20px' }}
                ></i>
                <h1>Masuk</h1>
              </div>
              <div className="col-sm-9">
                <label>Email</label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="border-radius form-control"
                    placeholder="email@gmail.com"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    autoComplete="off"
                    value={email}
                    onChange={handleEmail}
                  />
                </div>
              </div>
              <div className="col-sm-9">
                <label className="d-flex justify-content-between">Password</label>
                <div className="input-group mb-3 wrapper">
                  <div className="input-field">
                    <input
                      type={type}
                      className="border-radius form-control"
                      placeholder="password"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      autoComplete="off"
                      value={password}
                      onChange={handlePassword}
                    />
                    <button onClick={handleToggle}>
                      <Icon icon={icon} size={20} />
                    </button>
                  </div>
                </div>
              </div>
              {user.error && (
                <div className="col-sm-9 fw-bold">
                  <p style={{ color: 'red' }}>Password or email wrong</p>
                </div>
              )}
              <div className="col-sm-9 mb-5">
                <button onClick={handleLogin} className="btn w-100 border-radius btn-login">
                  Masuk
                </button>
              </div>
              <div className="col-sm-9 text-center">
                <p>
                  Belum punya akun ?{' '}
                  <Link to="/register" className="font-color fw-bold">
                    Daftar di sini
                  </Link>
                </p>
              </div>
              {/* <div className="col-sm-9 text-center">
                <p>Masuk dengan </p>

                <GoogleLogin
                  clientId={clientId}
                  buttonText="Login"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={false}
                  autoLoad={false}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
