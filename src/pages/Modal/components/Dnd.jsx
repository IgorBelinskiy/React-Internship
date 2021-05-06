import React from 'react';
import PropTypes from 'prop-types';
import useDnd from '../../../customHook/useDnd';
// import useFetch from '../../../customHook/useFetch';
import Preloader from '../../../components/Preloader/Preloader';

const Dnd = ({ id }) => {
  const {
    dnd,
    handleDragStart,
    handleDragEnter
  } = useDnd(id);

  if (dnd.loading) return <Preloader />;
  if (dnd.error) return 'Сервер не отвечает...';
  return (
    <div className="dnd_body">
      <h2>Drag and Drop</h2>
      <ul className="dnd_wrapper">
        {dnd.map((el, i) => (
          <li
            key={el.id}
            className="dnd"
            draggable
            onDragStart={() => handleDragStart(i)}
            onDragEnter={() => handleDragEnter(i)}
            onDragOver={(e) => e.preventDefault()}
          >
            {`${el.title} : ${el.text}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

Dnd.propTypes = {
  id: PropTypes.number.isRequired
};

export default Dnd;
