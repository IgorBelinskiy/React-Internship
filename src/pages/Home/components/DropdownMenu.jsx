import classes from '../css/DropdownMenu.module.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';



const DropdownMenu = ({ to, setDropdown, text }) => {

   return (
      <div onClick={() => setDropdown(false)}>
         <Link to={to} className={classes.dropdown_item}>{text}</Link>
      </div>
   )
}

DropdownMenu.propTypes = {
   setDropdown: PropTypes.func,
   to: PropTypes.string,
   text: PropTypes.string
}

export default DropdownMenu;