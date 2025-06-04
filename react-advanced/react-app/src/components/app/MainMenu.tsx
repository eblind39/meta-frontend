import { Link } from 'react-router';
import '../../css/main_menu.css'
import LoggedInUser from './LoggedInUser'

const MainMenu = () => {
    return (
        <menu className='main-menu'>
          <Link to="/">Home</Link>
          <Link to="/forms">Forms</Link>
          <Link to="/signup">SignUp</Link>
          <Link to="/theme">Theme</Link>
          <Link to='/hooks'>Hooks</Link>
          <Link to='/jsx'>Jsx</Link>
          <Link to='/revelo'>Revelo</Link>
          <Link to='/test'>Tests</Link>
          <LoggedInUser />
        </menu>
    )
}

export default MainMenu;