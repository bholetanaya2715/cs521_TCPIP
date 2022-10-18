import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>

    <div className="App">
    
   
 <Routes>
    <Route exact path="/" element={<HomePage />}/>

      </Routes>
    </div>
    </Router>

  );
}

export default App;
