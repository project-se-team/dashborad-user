import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import EditProfile from './components/pages/EditProfile';
import Monthly from './components/pages/Monthly';
import Report from './components/pages/Report';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/monthly-fee" element={<Monthly />} />
            <Route path="/report-problem" element={<Report />} />
            <Route path="/" element={<div>หน้าหลัก</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App