import classes from '../css/DropdownMenu.module.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';



const DropdownMenu = ({ setDropdown }) => {

   const handleClick = () => setDropdown(false)
   return (

      <div onClick={handleClick} className={classes.dropdown_menu}>
         <Link to='/bk' className={classes.dropdown_item}>basic knowledge</Link>
         <Link to='/bio' className={classes.dropdown_item}>biography</Link>
         <Link to='/api' className={classes.dropdown_item}>api</Link>
      </div>
   )
}
DropdownMenu.propTypes = {
   setDropdown: PropTypes.func
}

export default DropdownMenu;