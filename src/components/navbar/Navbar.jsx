import { useState } from "react";
import "./navbar.scss";
import logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import profilePicture from "../../assets/profile-picture.webp";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <header className={isScrolled ? "navbar scrolled" : "navbar"}>
      <navbar>
        <div className="left">
          <img src={logo} alt="Netflix Logo" />
          <span>Ana Sayfa</span>
          <span>Diziler</span>
          <span>Filmler</span>
          <span>Yeni Çıkanlar</span>
          <span>Listem</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>Neşathan</span>
          <NotificationsIcon className="icon" />
          <img src={profilePicture} alt="Profile" />
          <div className="profile_box">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>Ayarlar</span>
              <span>Çıkış Yap</span>
            </div>
          </div>
        </div>
      </navbar>
    </header>
  );
}

export default Navbar;
