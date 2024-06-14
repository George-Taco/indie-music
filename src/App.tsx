import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ListenerLeaderboard from './pages/ListenerLeaderboard';
import Login from './pages/Login';
import Profile from './pages/Profile';
import SongExplorer from './pages/SongExplorer';
import SongLeaderboard from './pages/SongLeaderboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/songexplorer" element={<SongExplorer/>}/>
        <Route path="/songleaderboard" element={<SongLeaderboard/>}/>
        <Route path="/listenerleaderboard" element={<ListenerLeaderboard/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App;
