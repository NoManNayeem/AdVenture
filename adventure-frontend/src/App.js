import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdSlots from './components/AdSlots';
import AddAdSlot from './components/AddAdSlot';
import Users from './components/Users';
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import RTB from './components/RTB';
import Campaigns from './components/Campaigns';
import CreateBid from './components/CreateBid';
import CreateCampaign from './components/CreateCampaign';
import Ads from './components/Ads';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/adslots" element={<AdSlots />} />
        <Route path="/add-adslot" element={<AddAdSlot />} />
        <Route path="/users" element={<Users />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/rtb" element={<RTB />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/create-bid" element={<CreateBid />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/ads" element={<Ads />} />
      </Routes>
    </Router>
  );
}

export default App;
