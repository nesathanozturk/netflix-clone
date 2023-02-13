import { useState, useEffect } from "react";
import "../../styles/navbar.scss";
import logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import profilePicture from "../../assets/profile-picture.webp";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <header className={`navbar ${isScrolled && "scrolled"}`}>
      <navbar>
        <div className="left">
          <img src={logo} alt="Netflix Logo" />
          <ul>
            <li>
              <a href="/">Ana Sayfa</a>
            </li>
            <li>
              <a href="/diziler">Diziler</a>
            </li>
            <li>
              <a href="/filmler">Filmler</a>
            </li>
            <li>
              <a href="/yeni-cikanlar">Yeni Çıkanlar</a>
            </li>
            <li>
              <a href="/listem">Listem</a>
            </li>
          </ul>
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
