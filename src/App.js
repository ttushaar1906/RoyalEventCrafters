import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import RoyalEvent from './pages/RoyalEvent';
import CooperativeEvents from './pages/CooperativeEvents';
import Home from './pages/Home';
import FamilyEvents from './pages/FamilyEvents';
import "../src/styles/styling.css";
import CustomNavbar from './componets/Navbar';
import Footer from './componets/Footer';


function Events() {
  return  <h2>Feed Page</h2>;
}

function Feedbacks() {
  return <h2>Feedbacks Page</h2>;
}

function Photos() {
  return <h2>Photos Page</h2>;
}

function App() {
  return (
    <div classNameName="App">
        <Router>
         <CustomNavbar />
         
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
          <Route path="/photos" element={<Photos />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/RoyalEvent' element={<RoyalEvent />} />
          <Route path='/RoyalEvent/co-operativeEvent' element={<CooperativeEvents/>}/>
          <Route path ='/home' element={<Home />}/>
          <Route path='/familyEvents' element={<FamilyEvents />}/>
        </Routes>
        <Footer />
    </Router>
      </div>
  );
}

export default App;
