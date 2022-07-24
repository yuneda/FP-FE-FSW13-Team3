import axios from 'axios';
class UserServices {
  auth(token) {
    return axios({
      method: 'get',
      url: 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/user',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  }
  login(email, password) {
    return axios.post('https://fp-be-fsw13-tim3.herokuapp.com/api/v1/login', {
      email,
      password,
    });
  }
  register(name, email, password) {
    return axios.post('https://fp-be-fsw13-tim3.herokuapp.com/api/v1/register', {
      email,
      password,
      name,
    });
  }
  update(form, token) {
    const url = 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/user/2/picture/cloudinary';
    return axios.put(url, form, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token,
      },
    });
  }
}
export default new UserServices();
