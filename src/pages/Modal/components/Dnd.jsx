import React from 'react'
import PropTypes from 'prop-types';
import withDnd from '../../../hoc/withDnd';


const Dnd = ({ dnd, handleDragStart, handleDragEnter }) => (
   <div className="dnd_body">
      <h2>Drag and Drop</h2>
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
   </div>
)

Dnd.propTypes = {
   dnd: PropTypes.array,
   handleDragStart: PropTypes.func,
   handleDragEnter: PropTypes.func,
}

export const DragAndDrop = withDnd(Dnd);

