import React from "react";
import "./Profile.css";
import Navbar from "../../molecules/navbarProfile/NavbarProfile";
import Form from "react-bootstrap/Form";
import PicInput from "../../../assets/fi_camera.png";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid box">
        <div className="row justify-content-center mt-3">
          <div className="col-md-6 col-sm-12 col-12 right d-flex">
            <form autoComplete="off">
              <div className="row w-100 justify-content-center ">
                <i
                  className="fa-solid fa-arrow-left"
                  style={{ marginTop: "20px" }}
                ></i>
                <div className="col-4  justify-content-center d-flex">
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
                        name="myImage"
                        accept="image/png, image/gif, image/jpeg"
                        className="border-radius form-control picture-field"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-9">
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
                    />
                  </div>
                </div>
                <div className="col-9 mb-3 ">
                  <label className="d-flex justify-content-between">
                    Kota*
                  </label>
                  <div class="input-group ">
                    <select
                      class="form-select option-field"
                      id="inputGroupSelect04"
                      aria-label="Example select with button addon"
                    >
                      <option selected>Pilih Kota</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
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
                    />
                  </div>
                </div>
                <div className="col-9">
                  <label className="d-flex justify-content-between">
                    Kota*
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="border-radius form-control"
                      placeholder="Contoh: +628123456789"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="col-9 mb-5">
                  <button className="btn w-100 border-radius btn-register">
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
