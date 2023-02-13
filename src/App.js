import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import User from "./pages/User/User";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<User />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
