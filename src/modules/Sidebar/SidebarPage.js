import './SidebarStyle.css'

function SidebarFatih() {
  return (
    <div className="App-sidebar">
      <div className="profile-title">
        <span className="profile-name">Владислав Фатихов</span>
        <div className="profile-position">
          <span>Программист Верстальщик</span>
        </div>
      </div>
      <ul>
        <li className="avatar-container">
          <img
            className="avatar-image"
            alt="Vladislav Fatikhov"
            src="/images/Fatikhov.png"
          />
        </li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

export default SidebarFatih
