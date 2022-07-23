import React, { useState, useEffect } from "react";
import axios from "axios";
import InputForm from "../../atoms/inputform/InputForm";
import MyNavbar from "../../molecules/navbarProfile/NavbarProfile";
import OptionInput from "../../atoms/OptionInput/OptionInput";
import TextArea from "../../atoms/textArea/TextArea";
// import './CreateProduct.css';
import "./EditProduct.scss";
import MyAlert from "../../atoms/alert/Alert";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeStatusIdle, editProduct } from "../../../redux/productSlice";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useParams } from "react-router-dom";
import UploadImage from "../../atoms/uploadImage/UploadImage";
import Button from "../../atoms/button/Button";
import { isExpired } from 'react-jwt';

const CreateProduct = () => {
  const token = localStorage.getItem('token');
  const tokenExpired = isExpired(token);
  const [image, setImage] = useState();
  const [IdSeller, setIdSeller] = useState("");
  const [Product, setProduct] = useState("");
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  let imgContainer = [];
  let imgCount = 0;
  const [files, setFiles] = useState(null);
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useSelector((state) => state.users);

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
    if (!token || tokenExpired) {
      navigate('/login');
    }
    dispatch(makeStatusIdle());
    async function fetchData() {
      let response = await axios.get(
        "https://fp-be-fsw13-tim3.herokuapp.com/api/v1/user",
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
          },
        }
      );
      response = response.data.data.id;
      setUserId(response);
    }
    fetchData();
  }, []);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  useEffect(() => {
    const url = "https://fp-be-fsw13-tim3.herokuapp.com/api/v1/product/" + id;
    const fetchData = async () => {
      try {
        const response = await axios.get(url);

        const result = response.data.data;
        setProduct(result);
        setIdSeller(result.id_user);
        console.log(result.image);
        setName(result.product_name);
        setPrice(result.product_price);
        setCategory(result.category);
        setImage(result.image);
        setDesc(result.description);
      } catch (error) {
        console.log("error adalah", error);
      }
    };
    fetchData();
    if (user.auth) {
      console.log(user.auth.name);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(files.length);
    const form = new FormData();
    for (let index = 0; index < files.length; index++) {
      form.append("files", files[index]);
    }
    form.append("product_name", name);
    form.append("product_price", price);
    form.append("category", category);
    form.append("description", desc);
    form.append("status", "available");
    const data = {
      form,
      token,
      id,
    };
    dispatch(editProduct(data));
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
                  style={{ marginTop: "20px" }}
                ></i>
                <InputForm
                  name="Nama Produk"
                  type="text"
                  placeholder="Nama Produk"
                  value={name}
                  onChange={handleName}
                />
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
                <UploadImage
                  name="Foto Produk"
                  type="file"
                  onChange={handleFiles}
                />
                {product.status === "loading" && (
                  <ScaleLoader
                    color={"#7126B5"}
                    loading={true}
                    size={50}
                    className="mx-auto tes"
                  />
                )}
                <Button name="Preview" />
                <div className="col-1"></div>
                <Button name="Simpan" type="submit" color="btn-register" />
                {product.status === "succeeded" && navigate("/product")}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
