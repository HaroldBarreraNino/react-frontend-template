import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage/homePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </div>
  );
}

export default App;