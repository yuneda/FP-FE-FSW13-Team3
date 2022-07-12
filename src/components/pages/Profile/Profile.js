import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Profile.css';
import Navbar from '../../molecules/navbarProfile/NavbarProfile';
import Form from 'react-bootstrap/Form';
import PicInput from '../../../assets/fi_camera.png';
import capitalCity from '../../../docs/city.json';
import { Link } from 'react-router-dom';

const Profile = () => {
  const token = localStorage.getItem('token');
  const [file, setFile] = useState(null);
  const [image, setImage] = useState();
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  useState(async () => {
    let result = await axios.get(
      'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/user',
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    result = result.data.data;
    console.log(result.name);
    setName(result.name);
    setCity(result.city);
    setImage(result.image);
    setAddress(result.address);
    setPhone(result.no_tlpn);
    console.log(result);
  });
  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleCity = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };
  const handleAddress = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  };
  const handlePhone = (e) => {
    e.preventDefault();
    setPhone(e.target.value);
  };
  const handleFile = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    // photoFormData.append("avatar", file);
    form.append('picture', file);
    form.append('name', name);
    form.append('city', city);
    form.append('address', address);
    form.append('no_tlpn', phone);
    console.log(file, name, city, address, phone);
    const inputBody = { name, city, address, no_tlpn: phone };
    try {
      const url = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/user';
      const url2 =
        'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/user/2/picture/cloudinary';
      const response = await axios.put(url2, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // 'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar title="Lengkapi Info Akun" />
      <div className="container-fluid box">
        <div className="row justify-content-center mt-3">
          <div className="col-md-6 col-sm-12 col-12 right d-flex">
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="row w-100 justify-content-center fit">
                <i
                  className="fa-solid fa-arrow-left"
                  style={{ marginTop: '20px' }}
                ></i>
                <div className="col-sm-4 mt-3 justify-content-center d-flex">
                  <label
                    htmlFor="file-upload"
                    className="bgImage user-upload-image"
                    style={{
                      position: 'relative',
                    }}
                  >
                    <div className="my-2">
                      <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        style={{
                          display: 'none',
                        }}
                        name="picture"
                        onChange={handleFile}
                      />
                      <div className="text-center py-2">
                        <img
                          src={PicInput}
                          style={{
                            width: '26px',
                            height: '26px',
                          }}
                        />
                      </div>
                    </div>
                    <img
                      src={image}
                      alt=""
                      style={{
                        display: image ? 'block' : 'none',
                        height: '78px',
                        width: '96px',
                        zIndex: '2',
                        position: 'absolute',
                        left: '0',
                        top: '0',
                        borderRadius: '12px',
                      }}
                    />
                  </label>
                </div>
                {/* <img src={image} alt="" /> */}
                <div className="col-sm-9">
                  <label className="d-flex justify-content-between">
                    Nama*
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="border-radius form-control"
                      placeholder="Nama"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      autoComplete="off"
                      value={name}
                      onChange={handleName}
                    />
                  </div>
                </div>
                <div className="col-sm-9 mb-3 ">
                  <label className="d-flex justify-content-between">
                    Kota*
                  </label>
                  <div className="input-group ">
                    <select
                      className="form-select option-field"
                      id="inputGroupSelect04"
                      aria-label="Example select with button addon"
                      onChange={handleCity}
                      value={city ? city : 'Surabaya'}
                    >
                      <option defaultValue="Surabaya">Pilih Kota</option>
                      {capitalCity.map((city, index) => (
                        <option key={index} value={city.city}>
                          {city.city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-sm-9" as="textarea">
                  <label className="d-flex justify-content-between">
                    Alamat*
                  </label>
                  <div className="input-group mb-3">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      type="text"
                      className="border-radius form-control"
                      placeholder="Contoh: Jalan Ikan Hiu 33"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      autoComplete="off"
                      value={address ? address : ''}
                      onChange={handleAddress}
                    />
                  </div>
                </div>
                <div className="col-sm-9">
                  <label className="d-flex justify-content-between">
                    No Handphone*
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="border-radius form-control"
                      placeholder="Contoh: +628123456789"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      autoComplete="off"
                      value={phone ? phone : ''}
                      onChange={handlePhone}
                    />
                  </div>
                </div>
                <div className="col-sm-9 mb-5">
                  <button
                    type="submit"
                    className="btn w-100 border-radius btn-register"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
