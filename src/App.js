import './App.css';
import Heading from './components/Heading';
import Counter from './Counter';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Heading classValue="white" text="Aplikacja licznika w ReactJS"/>
      </header>
        <Counter />
    </div>
  );
}

export default App;
