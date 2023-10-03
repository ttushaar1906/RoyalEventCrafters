import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import RoyalEvent from './pages/RoyalEvent';
import CooperativeEvents from './pages/CooperativeEvents';
import Home from './pages/Home';
import FamilyEvents from './pages/FamilyEvents';
import CustomNavbar from './componets/Navbar';
import Footer from './componets/Footer';
import "../src/styles/styling.css";
import Index from './pages/Index';
import SignUp from './pages/SignUp';
import Photos from './pages/Photos';
import Reviews from './pages/Reviews';

// function RoyalEvent() {
//   return  <h2>Event Page</h2>;
// }



// function Photos() {
//   return <h2>Photos Page</h2>;
// }

function App() {
  return (
    <div classNameName="App">
        <Router>
          
         <CustomNavbar />
         
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Index />} />
          <Route path='/signUp' element={<SignUp />} />
          {/* <Route path="/events" element={<Events />} /> */}
          <Route path ='/home' element={<Home />}/>
          <Route path='/RoyalEvent' element={<RoyalEvent />} />
          <Route path='/familyEvents' element={<FamilyEvents />}/>
          <Route path='/RoyalEvent/co-operativeEvent' element={<CooperativeEvents/>}/>
          {/* <Route path="/feedbacks" element={<Feedbacks />} /> */}
          <Route path="/photos" element={<Photos />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/reviews' element={<Reviews />} />

        </Routes>
        <Footer />
    </Router>
      </div>
  );
}

export default App;
