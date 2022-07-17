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
}
export default new ProductServices();
