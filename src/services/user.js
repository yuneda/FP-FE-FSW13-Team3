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
    console.log(name, email, password);
    return axios.post(
      'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/register',
      {
        email,
        password,
        name,
      }
    );
  }
}
export default new UserServices();
