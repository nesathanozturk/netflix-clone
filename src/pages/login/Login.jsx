import "../../styles/login.scss";
import useAuthContext from "../../hooks/use-auth-context";
import logo from "../../assets/images/logo.png";

function Login() {
  const { setIsLoggedIn, username, setUsername, password, setPassword } =
    useAuthContext();

  const handleSubmit = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="login">
      <navbar>
        <div className="wrapper">
          <img className="logo" src={logo} alt="Netflix Logo" />
        </div>
      </navbar>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Oturum Aç</h1>
          <input
            className="form-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Kullanıcı Adı"
            required
          />
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Parola"
            required
          />
          <button>Oturum Aç</button>
          <div className="help">
            <div className="check">
              <input type="checkbox" />
              <label>Beni hatırla</label>
            </div>
            <span>
              <a href="https://www.netflix.com/tr/LoginHelp">
                Yardım ister misiniz?
              </a>
            </span>
          </div>
          <span>
            Netflix'e katılmak ister misiniz?
            <a href="https://www.netflix.com/tr/"> Şimdi kaydolun.</a>
          </span>
          <small>
            Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA
            tarafından korunuyor. <b>Daha fazlasını öğrenin</b>.
          </small>
        </form>
      </div>
    </div>
  );
}

export default Login;
