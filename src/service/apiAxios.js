import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users/',
  method: 'get'
});

const apiAxios = {
  usersApiAxios() {
    return instance()
      .then((response) => response.data);
  },
  userDragAndDrop(id) {
    return instance(`${id}`)
      .then((response) => response.data);
  }
};
export default apiAxios;
