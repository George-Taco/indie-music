import logo from '../icons/logo.png';
import leaderboard from '../icons/leaderboard.png';
import search from '../icons/search.png';
import submit from '../icons/submit.png';
import heart from '../icons/Heart-Pg.png';

function NavPanel() {
    return(
    <div id="nav-panel">
        <h1 id="nav-panel-logo-text">Rhythmic</h1>
        <a href='/songexplorer' className="nav-button-links">
            <button className='nav-panel-button' id="explorer-button">&nbsp;&nbsp;Explorer
                <img src={search} alt="Search Icon" id="search-icon"></img>
            </button>
        </a>
        <a href='/leaderboard' className="nav-button-links">
            <button className='nav-panel-button' id="leaderboards-button">&nbsp;&nbsp;Leaderboards
                <img src={leaderboard} alt="leaderboard Icon" id="leaderboard-icon"></img>
            </button>
        </a>
        <a href='/submission' className="nav-button-links">
            <button className='nav-panel-button' id="submission-button">&nbsp;&nbsp;Submission
                <img src={submit} alt="Submit Icon" id="submit-icon"></img>
            </button>
        </a>
        <a href="/likes" className="nav-button-links">
            <button className='nav-panel-button' id="likes-button">&nbsp;&nbsp;Likes
                <img src={heart} alt="Heart Icon" id="heart-pg-icon"></img>
            </button>
        </a>
        <img src={logo} alt="Rhyhtmic Logo" id="logo-icon"></img>
    </div>
  )
}

export default NavPanel