import { useState } from "react";
import "./styles/_reset.scss";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <>{isLoggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn} />}</>;
}

export default App;
