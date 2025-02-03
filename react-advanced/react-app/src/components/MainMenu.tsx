import { Link } from 'react-router';
import '../css/main_menu.css'

const MainMenu = () => {
    return (
        <menu className='main-menu'>
          <Link to="/">Home</Link>
        </menu>
    )
}

export default MainMenu;