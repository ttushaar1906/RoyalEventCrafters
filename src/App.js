import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import RoyalEvent from './pages/RoyalEvent';
import CooperativeEvents from './pages/CooperativeEvents';
import FamilyEvents from './pages/FamilyEvents';
import CustomNavbar from './componets/Navbar';
import Footer from './componets/Footer';
import "../src/styles/styling.css";
import Index from './pages/Index';
import SignUp from './pages/SignUp';
import Photos from './pages/Photos';
import Reviews from './pages/Reviews';
import Home from './pages/Home';
import Main from './pages/Main';
import Dashboard from './componets/Dashboard';
import Thanks from './pages/Thanks';

function App() {
  return (
    <div className="App">
      <Router>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path="/Index" element={<Index />} />
          <Route path='/familyEvents' element={<FamilyEvents />} />
          <Route path='/RoyalEvent' element={<RoyalEvent />} />
          <Route path='/RoyalEvent/co-operativeEvent' element={<CooperativeEvents />} />
          <Route path="/photos" element={<Photos />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='Home' element = {<Home />} />
          <Route path='/main' element = {<Main />} />
          <Route path='/Dashboard' element= {<Dashboard />} />
          <Route path='/Thanks' element={<Thanks />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
