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
import Dashboard from './componets/Dashboard';
import Thanks from './pages/Thanks';
import Wedding from './pages/Wedding';
import BirthdayParty from './pages/BirthdayParty';
import Err from './pages/Err';
import WeddingCity from './componets/WeddingCity';
import Anniversary from  './pages/Anniversary';
import AnniversaryCity from './componets/AnniversaryCity';
import BirthdayPlace from './componets/BirthdayPlace';
import Conferences from './componets/Conferences';


function App() {
  return (
    <div className="App">
      <Router>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path="/Index" element={<Index />} />
          <Route path='/RoyalEvent' element={<RoyalEvent />} />
          <Route path='/RoyalEvent/familyEvents' element={<FamilyEvents />} />
          <Route path='/RoyalEvent/co-operativeEvent' element={<CooperativeEvents />} />
          <Route path="/photos" element={<Photos />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='Home' element = {<Home />} />
          <Route path='/Dashboard' element= {<Dashboard />} />
          {/* <Route path='/main' element = {<Main />} /> */}

          {/* Wedding */}
          <Route path='/RoyalEvent/wedding' element={<Wedding />}/>
          <Route path='/RoyalEvent/wedding/:weddingCity' element={<WeddingCity />}/>
          <Route path='/wedding/otheritems' element={<WeddingCity />}/>
          {/* http://localhost:4000/packages/wedding/otheritem */}

          {/* Anniversary */}
          <Route path='/RoyalEvent/anniversary' element={<Anniversary/>}/>
          <Route path='/RoyalEvent/anniversary/:placeTitle' element={<AnniversaryCity />}/>

          {/* Birthday */}
          <Route path='/RoyalEvent/birthdayParty' element={<BirthdayParty />}/>
          <Route path='/RoyalEvent/birthdayParty/:partyType' element={<BirthdayPlace />}/>

          {/*Events  */}
          <Route path='/RoyalEvent/:eventTitle' element={<Conferences />}/>



          <Route path='/err' element={<Err />}/>
          <Route path='/Thanks' element={<Thanks />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
