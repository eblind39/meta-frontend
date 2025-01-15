import Heading from './Heading';

interface Props {
  title?: string
}

function App({title = ''}: Props = {}) {
  return (
    <div className="App">
      <p>{ title }</p>
      <Heading />
    </div>
  );
}

export default App;