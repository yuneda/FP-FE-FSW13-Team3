import React, { useState } from 'react';
import axios from 'axios';
import './Profile.css';
import Navbar from '../../molecules/navbarProfile/NavbarProfile';
import Form from 'react-bootstrap/Form';
import PicInput from '../../../assets/fi_camera.png';
import capitalCity from '../../../docs/city.json';

const Profile = () => {
  const token = localStorage.getItem('token');
  const [file, setFile] = useState(null);
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
    // console.log(form);
    try {
      const response = await axios.put(
        'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/users/:id/picture/cloudinary',
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + token,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Navbar />
      <div className="container-fluid box">
        <div className="row justify-content-center mt-3">
          <div className="col-md-6 col-sm-12 col-12 right d-flex">
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="row w-100 justify-content-center ">
                <i
                  className="fa-solid fa-arrow-left"
                  style={{ marginTop: '20px' }}
                ></i>
                <div className="col-4  justify-content-center d-flex">
                  <label
                    htmlFor="file-upload"
                    className="bgImage user-upload-image"
                  >
                    <div className="my-2">
                      <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        style={{
                          display: 'none',
                        }}
                        onChange={handleFile}
                      />
                      <div className="text-center py-2">
                        <img
                          src={PicInput}
                          style={{ width: '26px', height: '26px' }}
                        />
                      </div>
                    </div>
                  </label>
                </div>
                <div className="col-9">
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
                <div className="col-9 mb-3 ">
                  <label className="d-flex justify-content-between">
                    Kota*
                  </label>
                  <div className="input-group ">
                    <select
                      className="form-select option-field"
                      id="inputGroupSelect04"
                      aria-label="Example select with button addon"
                      onChange={handleCity}
                      value={city}
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
                <div className="col-9" as="textarea">
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
                      value={address}
                      onChange={handleAddress}
                    />
                  </div>
                </div>
                <div className="col-9">
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
                      value={phone}
                      onChange={handlePhone}
                    />
                  </div>
                </div>
                <div className="col-9 mb-5">
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
