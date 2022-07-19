import axios from 'axios';
class ProductServices {
  create(form, token) {
    const url = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/product';
    return axios.post(url, form, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token,
      },
    });
  }
  getAll() {
    const url = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/product';
    return axios.get(url);
  }
  filter(filter) {
    const url = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/product';
    return axios({
      method: 'get',
      url,
      params: {
        filter,
      },
    });
  }
  search(search) {
    const url = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/product/search?name=' + search;
    return axios({
      method: 'post',
      url,
    });
  }
  query(status, token) {
    const url = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/allproduct?status=' + status;
    return axios({
      method: 'get',
      url,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  }
}
export default new ProductServices();
