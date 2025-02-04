import { Link } from 'react-router';
import '../../css/main_menu.css'
import LoggedInUser from './LoggedInUser'

const MainMenu = () => {
    return (
        <menu className='main-menu'>
          <Link to="/">Home</Link>
          <Link to="/forms">Forms</Link>
          <Link to="/signup">SignUp</Link>
          <LoggedInUser />
        </menu>
    )
}

export default MainMenu;