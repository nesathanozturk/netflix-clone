import profilePicture from "../../assets/images/profile-picture.webp";

function User() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="user">
          <img src={profilePicture} alt="Avatar" />
          <span>Neşathan</span>
        </div>
      </div>
    </div>
  );
}

export default User;
