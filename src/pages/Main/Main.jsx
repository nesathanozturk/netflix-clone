import useAuthContext from "../../hooks/use-auth-context";
import Login from "../Login/Login";
import User from "../User/User";
import "../../sass/base/_reset.scss";

function Main() {
  const { isLoggedIn } = useAuthContext();

  return <>{isLoggedIn ? <User /> : <Login />}</>;
}

export default Main;
