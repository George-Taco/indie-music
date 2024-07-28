import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './firebase/firebaseConfig';
import Home from './pages/Home';
import Submission from './pages/SongSubmission';
import SongExplorer from './pages/SongExplorer';
import Leaderboard from './pages/Leaderboard';
import SongLeaderboard from './pages/Leaderboard';
import Login from './pages/Login';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase/firebaseConfig';
import AuthRoute from './components/AuthRoute';
import NavPanel from './components/NavPanel';

initializeApp(firebaseConfig);

function App() {


  return (
    <Router>
      <NavPanel />
      <AuthRoute>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/songexplorer" element={<SongExplorer/>}/>
        <Route path="/leaderboard" element={<Leaderboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/songexplorer" element={<SongExplorer/>}/>
        <Route path="/songleaderboard" element={<SongLeaderboard/>}/>
        <Route path="/submission" element={<Submission/>}/>
      </Routes>
      </AuthRoute>
    </Router>
  )
}

export default App;
