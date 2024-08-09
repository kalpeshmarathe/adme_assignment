import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ImageContainer from './components/ImageContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <ImageContainer/>
    </div>
  );
}

export default App;
