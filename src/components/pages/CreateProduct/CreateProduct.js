import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputForm from '../../atoms/inputform/InputForm';
import MyNavbar from '../../molecules/navbarProfile/NavbarProfile';
import Form from 'react-bootstrap/Form';
import OptionInput from '../../atoms/OptionInput/OptionInput';
import TextArea from '../../atoms/textArea/TextArea';
import PicInput from '../../../assets/fi_camera.png';
// import './CreateProduct.css';
import './CreateProduct.scss';
import MyAlert from '../../atoms/alert/Alert';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStatusIdle, createProduct } from '../../../redux/productSlice';

const CreateProduct = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  let imgContainer = [];
  let imgCount = 0;
  const token = localStorage.getItem('token');
  const [files, setFiles] = useState(null);
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [desc, setDesc] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handlePrice = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  };
  const handleCategory = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };
  const handleDesc = (e) => {
    e.preventDefault();
    setDesc(e.target.value);
  };
  const handleFiles = (e) => {
    e.preventDefault();
    let filesInput = e.target.files;
    imgCount = filesInput.length;
    for (let index = 0; index < imgCount; index++) {
      imgContainer.push(e.target.files[index]);
    }
    setFiles(imgContainer);
  };
  useEffect(() => {
    dispatch(makeStatusIdle());
    async function fetchData() {
      let response = await axios.get(
        'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/user',
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + token,
          },
        }
      );
      response = response.data.data.id;
      setUserId(response);
    }
    fetchData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(files.length);
    const form = new FormData();
    for (let index = 0; index < files.length; index++) {
      form.append('files', files[index]);
    }
    form.append('product_name', name);
    form.append('product_price', price);
    form.append('category', category);
    form.append('description', desc);
    form.append('status', 'available');
    const data = {
      form,
      token,
    };
    dispatch(createProduct(data));
  };
  return (
    <>
      <MyNavbar title="Lengkapi Detail Produk" />
      <div className="container-fluid box">
        <div className="row justify-content-center mt-3">
          <div className="col-md-6 col-sm-12 col-12 right d-flex">
            <form
              autoComplete="off"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              className="justify-content-center d-flex"
            >
              {success && (
                <MyAlert title="Successfully created product" color="success" />
              )}
              <div className="row w-100 justify-content-center fit">
                <i
                  className="fa-solid fa-arrow-left fit"
                  style={{ marginTop: '20px' }}
                ></i>
                <div className="col-sm-9 responsive-form">
                  <label className="d-flex justify-content-between">
                    Nama Produk
                  </label>
                  <div className="input-group mt-2 mb-3">
                    <input
                      type="text"
                      className="border-radius form-control"
                      placeholder="Nama Produk"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      autoComplete="off"
                      onChange={handleName}
                      value={name}
                    />
                  </div>
                </div>
                <InputForm
                  name="Harga Produk"
                  type="text"
                  placeholder="Rp 0,00"
                  value={price}
                  onChange={handlePrice}
                />
                <OptionInput
                  name="Kategori"
                  select="Pilih Kategori"
                  onChange={handleCategory}
                  value={category}
                />
                <TextArea
                  name="Deskripsi"
                  as="textarea"
                  type="text"
                  placeholder="Deskripsi produk"
                  onChange={handleDesc}
                  value={desc}
                />
                <div className="col-sm-9 justify-content-start d-flex">
                  <label>Foto Produk</label>
                </div>

                <div className="col-sm-9 justify-content-start d-flex mb-5 input-file">
                  <label
                    htmlFor="file-upload"
                    className="product-upload-image px-5 py-5 "
                  >
                    <div className="">
                      <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        style={{
                          display: 'none',
                        }}
                        onChange={handleFiles}
                        multiple
                      />
                      <div className="text-center">
                        <i className="fa-solid fa-plus fa-xl"></i>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="col-4 mb-5 button-size d-flex justify-content-start ">
                  <button className="btn border-radius">Preview</button>
                </div>
                <div className="col-1"></div>

                <div className="col-4 mb-5 button-size d-flex justify-content-end ">
                  <button
                    type="submit"
                    className="btn border-radius btn-register "
                  >
                    Simpan
                  </button>
                </div>
                {product.status === 'loading' && <div>Loading...</div>}
                {product.status === 'succeeded' && navigate('/product')}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
