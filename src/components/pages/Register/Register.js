import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser, makeStatusIdle } from '../../../redux/usersSlice';

import './Register.scss';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import BgRegister from '../../../assets/bg-register.png';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failed, setFailed] = useState(false);
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);

  var registerImage = {
    backgroundImage: 'url(' + BgRegister + ')',
    backgroundRepeat: 'no-repeat',
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
  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
    setFailed(false);
  };
  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
    setFailed(false);
  };
  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
    setFailed(false);
  };
  const handleRegister = async (event) => {
    event.preventDefault();
    // try {
    const data = { name, email, password };
    dispatch(registerUser(data));

    // setTimeout(() => {
    //   if (user.statusRegister == 'succeeded') {
    //     setName('');
    //     setEmail('');
    //     setPassword('');
    //     setSuccess(true);
    //     navigate('/login');
    //   }
    // }, 2000);
    // } catch (error) {
    //   console.log(error);
    //   setFailed(true);
    // }
  };
  useEffect(() => {
    if (user.statusRegister == 'succeeded') {
      navigate('/login');
    }
    dispatch(makeStatusIdle());
  }, [user]);
  return (
    <div className="container-fluid box">
      {user.status == 'succeeded' && navigate('/login')}
      <div className="row">
        <div
          className="col-md-6 col-sm-12 col-12 left d-flex align-items-center fit-image"
          style={registerImage}
        >
          <div className="row justify-content-center">
            <div className="col-sm-10 title-register">
              <h2 className="title-register">Second</h2>
            </div>
            <div className="col-sm-10">
              <h2 className="title-register">Hand.</h2>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-12 right d-flex align-items-center">
          <form autoComplete="off" className="fit-form">
            <div className="row w-100 justify-content-center">
              <i className="fit-font fa-solid fa-arrow-left mb-5" style={{ marginTop: '20px' }}></i>
              <div className="col-sm-9 mb-3 text justify-content-start d-flex">
                <h1>Daftar</h1>
              </div>
              <div className="col-sm-9">
                <label className="d-flex justify-content-between">Nama</label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="border-radius form-control"
                    placeholder="Name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    autoComplete="off"
                    value={name}
                    onChange={handleName}
                  />
                </div>
              </div>
              <div className="col-sm-9">
                <label className="d-flex justify-content-between">Email</label>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="border-radius form-control"
                    placeholder="Email"
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
                      placeholder="Password"
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
              {failed && (
                <div className="col-sm-9 fw-bold">
                  <p style={{ color: 'red' }}>Email is already taken</p>
                </div>
              )}
              <div className="col-sm-9 mb-5">
                <button className="btn w-100 border-radius btn-register" onClick={handleRegister}>
                  Daftar
                </button>
              </div>
              <div className="col-sm-10 text-center range-bot">
                <p>
                  Sudah punya akun ?{' '}
                  <Link to="/login" className="font-color fw-bold">
                    Masuk di sini
                  </Link>
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
