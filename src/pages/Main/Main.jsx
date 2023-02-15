import useAuthContext from "../../hooks/use-auth-context";
import Login from "../Login/Login.jsx";
import User from "../User/User";
import "../../styles/_reset.scss";

function Main() {
  const { isLoggedIn } = useAuthContext();

  return <>{isLoggedIn ? <User /> : <Login />}</>;
}

export default Main;
