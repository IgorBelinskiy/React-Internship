import { useState, useEffect } from 'react';
import useFetch from './useFetch';

const useDnd = (id) => {
  const [dnd, setDnd] = useState({
    loading: true,
    error: false
  });

  const usersFromUseFetch = useFetch(id);

  useEffect(async () => {
    const user = await usersFromUseFetch;
    setDnd(user);
  }, [id]);

  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (position) => {
    setDraggingItem(position);
  };
  const handleDragEnter = (position) => {
    const listCopy = [...dnd];
    const draggingItemContent = listCopy[draggingItem];
    listCopy.splice(draggingItem, 1);
    listCopy.splice(position, 0, draggingItemContent);

    setDraggingItem(position);
    setDnd(listCopy);
  };
  return ({
    dnd, handleDragStart, handleDragEnter
  });
};

export default useDnd;
