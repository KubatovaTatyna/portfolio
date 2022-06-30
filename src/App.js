import './App.scss';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Works from './components/Works/Works';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
