import "./App.css"
import profileImage from "./assets/nimesh.jpg" // Replace with the actual path to your image

function App() {
  return (
    <div className="container">
      <div className="top-half">
        <div className="profile-avatar">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
      <div className="bottom-half">
        <div className="name-age">
          <h1 className="profile-name">Nimesh Thakur</h1>
          <span className="age">21</span>
        </div>
        <p className="location">Indore</p>
        <hr className="separator" />
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-number">80K</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat">
            <span className="stat-number">803K</span>
            <span className="stat-label">Likes</span>
          </div>
          <div className="stat">
            <span className="stat-number">1.4K</span>
            <span className="stat-label">Photos</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App