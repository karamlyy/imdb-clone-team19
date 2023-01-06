import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'

import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Welcome from './components/welcome/Welcome';





function App() {
  return (
    <Router>
      <Nav/>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/welcome' element={<Welcome />} />

      </Routes>
    </Router>
  );
}


export default App;

