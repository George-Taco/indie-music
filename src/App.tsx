import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ListenerLeaderboard from './pages/ListenerLeaderboard';
import Login from './pages/Login';
import Profile from './pages/Profile';
import SongExplorer from './pages/SongExplorer';
import SongLeaderboard from './pages/SongLeaderabord';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/SongExplorer" element={<SongExplorer/>}/>
        <Route path="/SongLeaderboard" element={<SongLeaderboard/>}/>
        <Route path="/ListenerLeaderboard" element={<ListenerLeaderboard/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
