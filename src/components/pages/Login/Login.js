import React, { useState, useEffect } from 'react';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import BgLogin from '../../../../src/assets/bg-login.png';
// import "./Login.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser, makeStatusIdle } from '../../../redux/usersSlice';
import './Login.scss';

import {
  selectUserStatus,
  selectUserLogin,
  selectUserError,
  loginUser,
} from '../../../redux/usersSlice';

const clientId = '623214781738-uv2700sfb46feke2a3bfg8k1lcmamr4l.apps.googleusercontent.com';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failed, setFailed] = useState(false);
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);

  // const onSuccess = async (res) => {
  //   console.log('LOGIN SUCCESS!', res);
  //   try {
  //     const response = await axios({
  //       method: 'post',
  //       url: 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/googleregis',
  //       data: {
  //         tokenId: res.tokenId,
  //       },
  //     });
  //     console.log(response);
  //     localStorage.setItem('token', response.data.token);
  //     navigate('/');
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // const onFailure = (res) => {
  //   console.log('LOGIN FAILED!', res);
  // };

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
    setFailed(false);
  };

  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
    setFailed(false);
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
