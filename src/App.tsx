import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Submission from './pages/Submission';
import SongExplorer from './pages/SongExplorer';
import Leaderboard from './pages/Leaderboard';
import logo from './icons/logo.png';
import leaderboard from './icons/leaderboard.png';
import search from './icons/search.png';
import submit from './icons/submit.png';

function App() {
  return (
    <Router>
      <div id="side-panel">
        <h1 id="side-panel-logo-text">Rhythmic</h1>
        <a href='/songexplorer' className="side-button-links">
        <button className='side-panel-button' id="explorer-button">&nbsp;&nbsp;Explorer
        <img src={search} alt="Search Icon" id="search-icon"></img>
        </button>
        </a>
        <a href='/leaderboard' className="side-button-links">
        <button className='side-panel-button' id="leaderboards-button">&nbsp;&nbsp;Leaderboards
        <img src={leaderboard} alt="leaderboard Icon" id="leaderboard-icon"></img>
        </button>
        </a>
        <a href='/submission' className="side-button-links">
        <button className='side-panel-button' id="submission-button">&nbsp;&nbsp;Submission
        <img src={submit} alt="Submit Icon" id="submit-icon"></img>
        </button>
        </a>
        <img src={logo} alt="Rhyhtmic Logo" id="logo-icon"></img>
      </div>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/submission" element={<Submission/>}/>
        <Route path="/songexplorer" element={<SongExplorer/>}/>
        <Route path="/leaderboard" element={<Leaderboard/>}/>
      </Routes>
    </Router>
  )
}

export default App;
