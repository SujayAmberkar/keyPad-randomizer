import './App.css';
import Keypad from './components/Pages/Keypad/Keypad';
import Protected from './components/Pages/Protected/Protected';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Keypad />} />
      <Route path="/cool" element={<Protected/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
