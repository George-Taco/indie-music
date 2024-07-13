import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './firebaseConfig';
import { getFirestore, addDoc, collection } from "firebase/firestore";
import Home from './pages/Home';
import ListenerLeaderboard from './pages/ListenerLeaderboard';
import Login from './pages/Login';
import Profile from './pages/Profile';
import SongExplorer from './pages/SongExplorer';
import SongLeaderboard from './pages/SongLeaderboard';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';
import AuthRoute from './components/AuthRoute';

initializeApp(firebaseConfig);

function App() {


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <Home/>
            </AuthRoute>
          }
        />
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
