import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './firebase/firebaseConfig';
import Home from './pages/Home';
import Submission from './pages/Submission';
import SongExplorer from './pages/SongExplorer';
import Leaderboard from './pages/Leaderboard';
import SongLeaderboard from './pages/Leaderboard';
import SongSubmission from './pages/SongSubmission';
import Login from './pages/Login';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase/firebaseConfig';
import AuthRoute from './components/AuthRoute';
import NavPanel from './components/NavPanel';

initializeApp(firebaseConfig);

function App() {


  return (
    <Router>
      <NavPanel></NavPanel>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/submission" element={<Submission/>}/>
        <Route path="/songexplorer" element={<SongExplorer/>}/>
        <Route path="/leaderboard" element={<Leaderboard/>}/>
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
        <Route path="/songsubmission" element={<SongSubmission/>}/>
      </Routes>
    </Router>
  )
}

export default App;
