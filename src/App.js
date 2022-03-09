import './App.css';
import Welcome from './components/Welcome';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Todolist from './components/Todolist';

function App() {
  return (
    <div className="app">
      <Router>  
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/todolist" element={<Todolist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
