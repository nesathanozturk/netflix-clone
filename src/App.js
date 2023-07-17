import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import User from "./pages/User/User";
import "./sass/main.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/giris" element={<Login />} />
        <Route path="/kullanici" element={<User />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
