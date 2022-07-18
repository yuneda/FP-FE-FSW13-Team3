import axios from 'axios';
class NotificationServices {
  get(token) {
    return axios({
      method: 'get',
      url: 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/notif',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  }
}
export default new NotificationServices();
