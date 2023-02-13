import "../../styles/user.scss";
import profilePicture from "../../assets/images/profile-picture.webp";

function User() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="user">
          <h1>Kim izliyor?</h1>
          <img src={profilePicture} alt="Avatar" />
          <h2>Neşathan</h2>
        </div>
      </div>
    </div>
  );
}

export default User;
