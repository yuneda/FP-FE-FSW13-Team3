import React from 'react';
import InputForm from '../../atoms/inputform/InputForm';
import MyNavbar from '../../molecules/navbarProfile/NavbarProfile';
import Form from 'react-bootstrap/Form';
import OptionInput from '../../atoms/OptionInput/OptionInput';
import TextArea from '../../atoms/textArea/TextArea';
import PicInput from '../../../assets/fi_camera.png';
import './CreateProduct.css';

const CreateProduct = () => {
  return (
    <>
      <MyNavbar />
      <div className="container-fluid box">
        <div className="row justify-content-center mt-3">
          <div className="col-md-6 col-sm-12 col-12 right d-flex">
            <form autoComplete="off">
              <div className="row w-100 justify-content-center">
                <i
                  className="fa-solid fa-arrow-left"
                  style={{ marginTop: '20px' }}
                ></i>
                <div className="col-9">
                  <label className="d-flex justify-content-between">
                    Nama Produk
                  </label>
                  <div className="input-group mt-2 mb-3">
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
                <InputForm
                  name="Harga Produk"
                  type="text"
                  placeholder="Rp 0,00"
                />
                <OptionInput name="Kategori" select="Pilih Kategori" />
                <TextArea
                  name="Deskripsi"
                  as="textarea"
                  type="text"
                  placeholder="Contoh: Jalan Ikan Hiu 33"
                />
                <div className="col-9 justify-content-start d-flex">
                  <label>Foto Produk</label>
                </div>

                <div className="col-9 justify-content-start d-flex mb-5 input-file ">
                  <div className="input-pic">
                    <label
                      className="d-flex justify-content-center mt-3"
                      for="input-file"
                    >
                      <i class="fa-solid fa-plus fa-xl"></i>
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
                <div className="col-4 mb-5 button-size d-flex justify-content-start ">
                  <button className="btn border-radius">Preview</button>
                </div>
                <div className="col-1"></div>

                <div className="col-4 mb-5 button-size d-flex justify-content-end ">
                  <button className="btn border-radius btn-register ">
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

export default CreateProduct;
