import { useState } from "react";
import "./styles/_reset.scss";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import User from "./pages/User/User";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <User />;
}

export default App;
