import { useState, useEffect } from 'react';
import useFetch from './useFetch';

const useDnd = (id) => {
  const [dnd, setDnd] = useState({
    loading: true,
    error: false
  });
  const { user } = useFetch(id);
  
  useEffect(() => {
    setDnd(user);
  }, [user]);

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
    dnd, setDnd, handleDragStart, handleDragEnter
  });
};

export default useDnd;
