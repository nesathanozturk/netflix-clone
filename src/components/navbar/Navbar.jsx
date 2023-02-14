import { useState, useEffect } from "react";
import useAuthContext from "../../hooks/use-auth-context";
import "../../styles/navbar.scss";
import logo from "../../assets/images/logo.png";
import profilePicture from "../../assets//images/profile-picture.webp";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditIcon from "@mui/icons-material/Edit";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

function Navbar() {
  const { username } = useAuthContext();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <header className={`navbar ${isScrolled && "scrolled"}`}>
      <div className="navbar">
        <div className="left">
          <img src={logo} alt="Netflix Logo" />
          <ul>
            <li>
              <a href="/home">Ana Sayfa</a>
            </li>
            <li>
              <a href="#">Diziler</a>
            </li>
            <li>
              <a href="#">Filmler</a>
            </li>
            <li>
              <a href="#">Yeni ve Popüler</a>
            </li>
            <li>
              <a href="#">Listem</a>
            </li>
            <li>
              <a href="#">Dile Göre Göz At</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>{username}</span>
          <NotificationsIcon className="icon" />
          <img src={profilePicture} alt="Profile" />
          <div className="profile_box">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>
                <EditIcon className="menu-icon" />
                Profil Yönetimi
              </span>
              <span>
                <ExitToAppIcon className="menu-icon" />
                Profilden Çık
              </span>
              <span>
                <InsertEmoticonIcon className="menu-icon" />
                Profili Aktar
              </span>
              <span>
                <PermIdentityIcon className="menu-icon" />
                Hesap
              </span>
              <span>
                <HelpOutlineIcon className="menu-icon" />
                Yardım Merkezi
              </span>
              <span>Netflix oturumunu kapat</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
