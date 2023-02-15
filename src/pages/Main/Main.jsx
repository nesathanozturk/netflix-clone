import useAuthContext from "../../hooks/use-auth-context";
import Home from "../Home/Home";
import User from "../User/User";
import "../../styles/_reset.scss";

function Main() {
  const { isLoggedIn } = useAuthContext();

  return <>{isLoggedIn ? <User /> : <Home />}</>;
}

export default Main;
