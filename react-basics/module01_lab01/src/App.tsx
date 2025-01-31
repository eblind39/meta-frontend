import HomePage from './HomePage';
import RegisterForm from './RegisterForm';
import MealsView from './MealsView';
import { Routes, Route, Link } from 'react-router';
import './css/card.css';

interface Props {
  title?: string
}

function App({title = ''}: Props = {}) {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link><span>/</span>
        <Link to="/register">Register</Link><span>/</span>
        <Link to="/meals">Meals</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage title={title} />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/meals" element={<MealsView />} />
      </Routes>
    </div>
  );
}

export default App;