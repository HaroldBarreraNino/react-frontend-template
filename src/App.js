import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage/homePage';
import ContactPage from './components/contactPage/contactPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/contact' element={<ContactPage />}/>
      </Routes>
    </div>
  );
}

export default App;
