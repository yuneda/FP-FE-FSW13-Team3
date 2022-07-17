import axios from 'axios';
class UserServices {
  login(email, password) {
    return axios.post('https://fp-be-fsw13-tim3.herokuapp.com/api/v1/login', {
      email,
      password,
    });
  }
  register(name, email, password) {
    console.log(name, email, password);
    // return axios({
    //   method: 'post',
    //   url: 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/register',
    //   data: {
    //     name,
    //     email,
    //     password,
    //   },
    // });
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

// const response = await axios.post(
//     'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/register',
//     {
//       name,
//       email,
//       password,
//     }
//   );
