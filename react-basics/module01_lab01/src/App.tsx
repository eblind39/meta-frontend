import {useState} from 'react';
import Heading from './Heading';
import Card from './Card';
import Btn from './Btn';
import BtnHandling from './BtnHandling';
import ModeToggler from './ModeToggler'
import GuessNumber from './GuessNumber';
import InputComponent from './InputComponent';
import RegisterForm from './RegisterForm';
import TextInputWithFocusButton from './TextInputWithFocusButton';
import PropDrillingContainer from './PropDrilling';
import Fruits from './Fruits';
import FruitsCounter from './FruitsCounter';
import FruitType from './types/fruittype';
import logo from './assets/logo.png';
import './css/card.css';

const Logo = () => {
  const restPic = <img src={logo} alt="logo" />;
  return restPic;
}

interface Props {
  title?: string
}

function App({title = ''}: Props = {}) {
  const [fruits] = useState<Array<FruitType>>([
      {fruitName: 'apple', id: 1},
      {fruitName: 'orange', id: 2},
      {fruitName: 'plum', id: 3},
      {fruitName: 'pear', id: 3},
  ]);

  return (
    <div className="App">
      <Logo />
      <p>{ title }</p>
      <Heading />
      <Fruits fruitsprop={fruits} />
      <FruitsCounter fruitsprop={fruits} />
      <RegisterForm />
      <TextInputWithFocusButton />
      <h1>Task: Add three Card elements</h1>
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />
      <Btn />
      <div>Event handling and embedded expressions</div>
      <BtnHandling />
      <div>Theme toggler (dark/light)</div>
      <ModeToggler />
      <div>Guess a number between 1 and 3</div>
      <GuessNumber />
      <InputComponent />
      <PropDrillingContainer />
    </div>
  );
}

export default App;