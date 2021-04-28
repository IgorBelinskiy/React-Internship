import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const useDnd = (id) => {
  const [dnd, setDnd] = useState({
    loading: true,
    error: false
  });

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
      setDnd(items);
    } catch (e) {
      setDnd({ loading: false, error: true });
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const draggingItem = useRef();
  const dragOverItem = useRef();

  const handleDragStart = (position) => {
    draggingItem.current = position;
  };
  const handleDragEnter = (position) => {
    dragOverItem.current = position;
    const listCopy = [...dnd];
    const draggingItemContent = listCopy[draggingItem.current];
    listCopy.splice(draggingItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggingItemContent);

    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;
    setDnd(listCopy);
  };
  return ({
    dnd, handleDragStart, handleDragEnter
  });
};

export default useDnd;
