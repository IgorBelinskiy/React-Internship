import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/img/img-2.svg'
import { BsArrowReturnLeft } from 'react-icons/bs'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import PropTypes from 'prop-types';
import './css/Modal.css'

const Modal = (props) => {
   const { address, phone, username } = props.location.state

   const [characters, updateCharacters] = useState([
      { id: 1, title: 'username', text: username },
      { id: 2, title: 'city', text: address.city },
      { id: 3, title: 'street', text: address.street },
      { id: 4, title: 'suite', text: address.suite },
      { id: 5, title: 'zipcode', text: address.zipcode },
      { id: 6, title: 'tel', text: phone },
   ])

   const handleOnDragEnd = (result) => {
      if (!result.destination) return;
      const items = Array.from(characters);
      const [reorderedItems] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItems);
      updateCharacters(items)
   }

   const [dnd, setDnd] = useState([
      { id: 1, title: 'username', text: username },
      { id: 2, title: 'city', text: address.city },
      { id: 3, title: 'street', text: address.street },
      { id: 4, title: 'suite', text: address.suite },
      { id: 5, title: 'zipcode', text: address.zipcode },
      { id: 6, title: 'tel', text: phone },
   ])

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



   return (
      <div className='modal'>
         <div className="modal_container">
            <div className="modal_wrapper">
               <div className="modal_img">
                  <img src={image} alt="" />
               </div>
               <DragDropContext onDragEnd={handleOnDragEnd}>
                  <Droppable droppableId='modal_item'>
                     {(provided) => (
                        <ul className="modal_item"
                           {...provided.droppableProps}
                           ref={provided.innerRef}>
                           {characters.map(({ id, title, text }, index) => {
                              return (
                                 <Draggable key={text} draggableId={text} index={index}>
                                    {(provided) => (
                                       <li
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          ref={provided.innerRef}>
                                          <div className="modal_text">
                                             {title} : {text}
                                          </div>
                                       </li>
                                    )}

                                 </Draggable>
                              )
                           })}
                           {provided.placeholder}
                        </ul>
                     )}
                  </Droppable>
               </DragDropContext>
               <div className='dnd_container'>
                  Drag and Drop
                  <ul
                     className='dnd_wrapper'>
                     {dnd.map((el, i) => (
                        <li
                           key={i}
                           className='dnd'
                           draggable={true}
                           onDragStart={(e) => handleDragStart(i)}
                           onDragEnter={(e) => handleDragEnter(i)}
                           onDragOver={(e) => e.preventDefault()}
                        >{el.title} : {el.text}</li>
                     )
                     )}
                  </ul>
               </div>
            </div>
            <div className='modal_btn'>
               <Link to='/api' className='modal_btn-text'><BsArrowReturnLeft /></Link>
            </div>
         </div>
      </div>
   )
}
Modal.propTypes = {
   location: PropTypes.object
}

export default Modal;

