import React from "react";
import BgLogin from "../../../../src/assets/bg-login.png";
import "./Login.css";

const Login = () => {
  var sectionStyle = {
    backgroundImage: "url(" + BgLogin + ")",
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
              <div className="col-10 mb-3">
                <i className="bi bi-arrow-left" />
                <h1>Masuk</h1>
              </div>
              <div className="col-10">
                <label htmlFor>Email</label>
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
              <div className="col-10">
                <label htmlFor>Password</label>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="border-radius form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="col-10 mb-5">
                <button className="btn w-100 border-radius btn-login">
                  Masuk
                </button>
              </div>
              <div className="col-10 text-center">
                <p>
                  Belum punya akun ?{" "}
                  <a
                    style={{ color: "#7126B5" }}
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
