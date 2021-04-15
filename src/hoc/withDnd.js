import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Preloader from '../components/Preloader/Preloader'

const withDnd = (WrapperComponent) => {
   return (props) => {

      const [dnd, setDnd] = useState(null)

      useEffect(() => {
         axios.get(`https://jsonplaceholder.typicode.com/users/${props.id}`)
            .then(response => response.data)
            .then(data => {
               const dnd = [
                  { id: 1, title: 'username', text: data.username },
                  { id: 2, title: 'city', text: data.address.city },
                  { id: 3, title: 'street', text: data.address.street },
                  { id: 4, title: 'suite', text: data.address.suite },
                  { id: 5, title: 'zipcode', text: data.address.zipcode },
                  { id: 6, title: 'tel', text: data.phone },
               ]
               setDnd(dnd)
            })
            .catch((error) => console.log(error))
      }, [props.id])

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

      if (!dnd) return <Preloader />
      return <WrapperComponent
         {...props}
         dnd={dnd}
         handleDragStart={handleDragStart}
         handleDragEnter={handleDragEnter}
      />
   }
}

export default withDnd;



