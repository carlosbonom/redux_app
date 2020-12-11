import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Botonera from './components/botonera/Botonera';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/:section' component = {Botonera} />
      </Router>
    </div>
  );
}

export default App;
