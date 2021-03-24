import classes from './DropdownMenu.module.css'
import { Link } from 'react-router-dom'




const DropdownMenu = ({ setDropdown }) => {
   // const [click, setClick] = useState(false)
   const handleClick = () => setDropdown(false)
   return (

      <div onClick={handleClick} className={classes.dropdown_menu}>
         <Link to='/bk' className={classes.dropdown_item}>basic knowledge</Link>
         <Link to='/bio' className={classes.dropdown_item}>biography</Link>
         <Link to='/api' className={classes.dropdown_item}>api</Link>
      </div>

   )
}

export default DropdownMenu;