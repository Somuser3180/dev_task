import { useNavigate } from 'react-router'
import './LandingScreen.css'

const LandingScreen = () => {

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="content">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>
        <button className="btn primary" onClick={() => navigate("/signup")}>Create Account</button>
        <button className="btn secondary " onClick={() => navigate("/login")}>Already Registered? Login</button>
      </div>
    </div>

  )
}

export default LandingScreen
