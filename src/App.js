import './App.scss';
import About from './components/About/About';
import Header from './components/Header/Header';
import Works from './components/Works/Works';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Works />
    </div>
  );
}

export default App;
