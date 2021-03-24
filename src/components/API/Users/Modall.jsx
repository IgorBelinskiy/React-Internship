import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../../../assets/img/img-2.svg'
import { BsArrowReturnLeft } from 'react-icons/bs'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const Modall = (props) => {
   const { address, phone, username } = props.location.state
   let list = [
      { id: 1, title: 'username', text: username },
      { id: 2, title: 'city', text: address.city },
      { id: 3, title: 'street', text: address.street },
      { id: 4, title: 'suite', text: address.suite },
      { id: 5, title: 'zipcode', text: address.zipcode },
      { id: 6, title: 'tel', text: phone },
   ]
   const [characters, updateCharacters] = useState(list)

   const handleOnDragEnd = (result) => {
      if (!result.destination) return;
      const items = Array.from(characters);
      const [reorderedItems] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItems);
      updateCharacters(items)
   }

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
            </div>
            <div className='modal_btn'>
               <Link to='/api' className='modal_btn-text'><BsArrowReturnLeft /></Link>
            </div>
         </div>
      </div>
   )
}

export default Modall;

