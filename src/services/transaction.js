import axios from 'axios';

class TransactionServices {
  addOffer(data) {
    const { id_product, bid_price, id_seller, token } = data;
    return axios({
      method: 'post',
      url: 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/offer',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data: {
        id_product,
        bid_price,
        id_seller,
      },
    });
  }
  wishlist(data) {
    const { endPoint, id_product, token } = data;
    return axios({
      method: 'put',
      url: 'https://fp-be-fsw13-tim3.herokuapp.com/api/v1/' + endPoint,
      data: {
        id_product,
      },
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  }
}

export default new TransactionServices();
