import axios from 'axios';

const useFetch = (id) => {
  const fetch = async () => {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await res.data;
      const items = [
        { id: 1, title: 'username', text: data.username },
        { id: 2, title: 'city', text: data.address.city },
        { id: 3, title: 'street', text: data.address.street },
        { id: 4, title: 'suite', text: data.address.suite },
        { id: 5, title: 'zipcode', text: data.address.zipcode },
        { id: 6, title: 'tel', text: data.phone },
      ];
      return items;
    } catch (e) {
      return ({ loading: false, error: true });
    }
  };
  return fetch();
};

export default useFetch;
