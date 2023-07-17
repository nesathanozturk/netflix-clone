import { Link } from "react-router-dom";
import { useState } from "react";
import Home from "../home/Home";
import useAuthContext from "../../hooks/use-auth-context";
import profilePicture from "../../assets/images/profile-picture.webp";
import "../../sass/pages/_user.scss";
import "animate.css";

function User() {
  const { username } = useAuthContext();
  const [homeScreen, setHomeScreen] = useState(false);

  return (
    <>
      {homeScreen === false ? (
        <div className="container animate__animated animate__fadeIn">
          <div className="wrapper">
            <div className="user">
              <h1>Kim izliyor?</h1>
              <Link to="/home">
                <img
                  src={profilePicture}
                  alt="Avatar"
                  onClick={() => setHomeScreen(true)}
                />
              </Link>
              <h2>{username}</h2>
            </div>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </>
  );
}

export default User;
