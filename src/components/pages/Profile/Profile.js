import React, { useState } from "react";
import "./Profile.css";
import Navbar from "../../molecules/navbarProfile/NavbarProfile";
import Form from "react-bootstrap/Form";
import PicInput from "../../../assets/fi_camera.png";
import axios from "axios";
import city from "../../../docs/city.json";

const Profile = () => {
  const url =
    "https://fp-be-fsw13-tim3.herokuapp.com/api/v1/users/:id/picture/cloudinary";
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [name, setName] = useState("");
  const [kota, setKota] = useState("");
  const [alamat, setAlamat] = useState("");
  const [no_tlpn, setNo_tlpn] = useState("");
  const [image, setImage] = useState("");

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };
  const handleKota = (event) => {
    event.preventDefault();
    setKota(event.target.value);
  };
  const handleAlamat = (event) => {
    event.preventDefault();
    setAlamat(event.target.value);
  };
  const handleTelepon = (event) => {
    event.preventDefault();
    setNo_tlpn(event.target.value);
  };
  const handleImage = (event) => {
    event.preventDefault();
    setImage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        url,
        {
          name,
          city: kota,
          address: alamat,
          no_tlpn,
        },
        config
      );
      console.log(name, kota, alamat, no_tlpn_image);
      setName("");
      setKota("");
      setAlamat("");
      setNo_tlpn("");
      setImage("");
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
            <form
              autoComplete="off"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              className="justify-content-center d-flex"
            >
              <div className="row w-100 justify-content-center fit">
                <i
                  className="fa-solid fa-arrow-left fit"
                  style={{ marginTop: "20px" }}
                ></i>
                <div className="col-sm-4  justify-content-center d-flex">
                  <div className="bgImage ">
                    <label
                      className="d-flex justify-content-center image-label"
                      for="input-file"
                    >
                      <img src={PicInput} width="40" />
                    </label>
                    <div className="input-group mb-3">
                      <input
                        id="input-file"
                        type="file"
                        name="picture"
                        accept="image/png, image/gif, image/jpeg"
                        className="border-radius form-control picture-field"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        autoComplete="off"
                        value={image}
                        onChange={handleImage}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-9">
                  <label className="d-flex justify-content-between">
                    Nama*
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="border-radius form-control"
                      placeholder="Username"
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
                    >
                      <option selected>Pilih Kota</option>
                      {city.map((town, index) => (
                        <option key={index} value={town.city}>
                          {town.city}
                        </option>
                      ))}

                      {/* <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option> */}
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
                      value={alamat}
                      onChange={handleAlamat}
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
                      value={no_tlpn}
                      onChange={handleTelepon}
                    />
                  </div>
                </div>
                <div className="col-sm-9 mb-5">
                  <button
                    className="btn w-100 border-radius btn-register"
                    type="submit"
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
