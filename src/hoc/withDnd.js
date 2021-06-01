import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Preloader from '../components/Preloader/Preloader';

const withDnd = (WrapperComponent) => {
  return (props) => {
    const [dnd, setDnd] = useState(null);
    // eslint-disable-next-line react/prop-types
    const { id } = props;
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.data)
        .then((data) => {
          const items = [
            { id: 1, title: 'username', text: data.username },
            { id: 2, title: 'city', text: data.address.city },
            { id: 3, title: 'street', text: data.address.street },
            { id: 4, title: 'suite', text: data.address.suite },
            { id: 5, title: 'zipcode', text: data.address.zipcode },
            { id: 6, title: 'tel', text: data.phone },
          ];
          setDnd(items);
        });
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

    if (!dnd) return <Preloader />;
    return (
      <WrapperComponent
        dnd={dnd}
        handleDragStart={handleDragStart}
        handleDragEnter={handleDragEnter}
      />
    );
  };
};

export default withDnd;
