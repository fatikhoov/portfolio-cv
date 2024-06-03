import { Link } from 'react-router-dom'
import './HeaderStyle.css'

function HeaderFatih() {
  return (
    <div className="App-header flex-row">
      {/* <h2 className="profile-initials">
        <span>Mira</span>
      </h2> */}
      <nav className="nav_wrapper">
        <ul>
          <li>
            <Link to="/">CV</Link>
          </li>
          <li>
            <Link to="/price">Price</Link>
          </li>
        </ul>
      </nav>
      {/* <div>
        <SwitchTheme />
      </div> */}
    </div>
  )
}

export default HeaderFatih
