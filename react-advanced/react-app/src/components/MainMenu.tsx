import { Link } from 'react-router';
import '../css/main_menu.css'

const MainMenu = () => {
    return (
        <menu className='main-menu'>
          <Link to="/">Home</Link>
          <Link to="/forms">Forms</Link>
          <Link to="/signup">SignUp</Link>
        </menu>
    )
}

export default MainMenu;