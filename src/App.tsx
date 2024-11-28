import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Landingpage from './Landingpage';
import Body from './components/Body';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/'  element = {<Landingpage />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/dashboard' element ={<Dashboard />} />

      </Routes>
      </Router>

        
     
    </div>
  );
}

export default App;
