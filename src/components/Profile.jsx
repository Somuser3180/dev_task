
import './Profile.css';


function Profile() {
  return (
    <div className="profile-container">
        <div class="account-section">
            <h2>Account Settings</h2>
        </div>
      
      <div className="profile-header">
        <div className="profile-image-wrapper">
          <img src="Ellipse 114.png" alt="Profile" className="profile-image" />
          <div className="camera-icon">
            <img src="Group 1585.svg" alt="Camera Icon" />
          </div>
        </div>
        <div className="profile-details">
          <h3>Marry Doe</h3>
          <p className="email email-section">Marry@Gmail.Com</p>
        </div>
      </div>
      <div class="profile-div">

      <p className="profile-description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
        Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
      </div>


    </div>
  );
}

export default Profile;
