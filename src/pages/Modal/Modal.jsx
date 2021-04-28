import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowReturnLeft } from 'react-icons/bs';
import PropTypes from 'prop-types';
import image from '../../assets/img/img-2.svg';
import './css/Modal.css';
// import DragAndDrop from './components/Dnd';
import Dnd from './components/Dnd';

const Modal = (props) => {
  const { location } = props;
  const { state } = location;
  const { id } = state;

  return (
    <div className="modal">
      <div className="modal_container">
        <div className="modal_wrapper">
          <div className="modal_img">
            <img src={image} alt="" />
          </div>
          <div className="dnd_container">
            {/* <DragAndDrop id={id} /> */}
            <Dnd id={id} />
          </div>
        </div>
        <div className="modal_btn">
          <Link to="/api" className="modal_btn-text"><BsArrowReturnLeft /></Link>
        </div>
      </div>
    </div>
  );
};
Modal.propTypes = {
  location: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default Modal;
