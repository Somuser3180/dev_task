import React from 'react';
import './SignupScreen.css';
import { useNavigate } from 'react-router';

function SignupScreen() {

  const navigate = useNavigate();

  return (
    <div className="register-container">
        <div class="register-section">
      <h2>Create your<br />PopX account</h2>

      <form className="register-form">
        
        <div className="form-group">
          <label>Full Name<span>*</span></label>
          <input class="input-section" type="text" placeholder="Marry Doe" />
        </div>

        <div className="form-group">
          <label>Phone number<span>*</span></label>
          <input type="text" placeholder="Marry Doe" />
        </div>

        <div className="form-group">
          <label>Email address<span>*</span></label>
          <input type="email" placeholder="Marry Doe" />
        </div>

        <div className="form-group">
          <label>Password <span>*</span></label>
          <input type="password" placeholder="Marry Doe" />
        </div>

        <div className="form-group">
          <label>Company name</label>
          <input type="text" placeholder="Marry Doe" />
        </div>

        <div className="form-group radio-group">
          <label>Are you an Agency?<span>*</span></label>
          <div className="radio-options">
            <label>
              <input type="radio" name="agency" defaultChecked />
              <span className="custom-radio"></span> Yes
            </label>
            <label>
              <input type="radio" name="agency" />
              <span className="custom-radio"></span> No
            </label>
          </div>
        </div>

        <button type="submit" className="register-btn" onClick={() => navigate("/login")}>Create Account</button>
      </form>
      </div>
    </div>
  );
}

export default SignupScreen;
