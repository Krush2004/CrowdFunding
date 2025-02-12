import React from 'react';
import { Route, Routes } from 'react-router';
import {useState} from 'react'

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [userCampaigns, setUserCampaigns] = useState([])
  return (
    <div className="relative text-whit sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar userCampaigns={userCampaigns}  setSearchQuery={setSearchQuery} />

        <Routes>
          <Route path="/" element={<Home setUserCampaigns={setUserCampaigns} searchQuery={searchQuery} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default App