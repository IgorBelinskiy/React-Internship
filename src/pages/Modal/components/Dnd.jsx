import React from 'react'
import PropTypes from 'prop-types';


const Dnd = ({ dnd, handleDragStart, handleDragEnter }) => {

   return (
      <>
         Drag and Drop
         <ul
            className='dnd_wrapper'>
            {dnd.map((el, i) => (
               <li
                  key={el.id}
                  className='dnd'
                  draggable={true}
                  onDragStart={() => handleDragStart(i)}
                  onDragEnter={() => handleDragEnter(i)}
                  onDragOver={(e) => e.preventDefault()}
               >
                  {el.title} : {el.text}
               </li>
            )
            )}
         </ul>
      </>
   )
}
Dnd.propTypes = {
   dnd: PropTypes.array,
   handleDragStart: PropTypes.func,
   handleDragEnter: PropTypes.func,
}

export default Dnd;