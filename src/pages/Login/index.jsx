import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser, getUserProfile } from "../../services/api";
import { setUser } from "../../store/userSlice";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (formSubmit) => {
    formSubmit.preventDefault();
    try {
      const token = await loginUser(username, password);
      const profile = await getUserProfile(token);
      dispatch(
        setUser({
          firstName: profile.firstName,
          lastName: profile.lastName,
          token: token,
        })
      );
      navigate("/profile");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main className="login">
      <i className="fa fa-user-circle"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
        </div>
        <div className="wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        <div className="remember">
          <input
            type="checkbox"
            id="remember-me"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {error && <div className="errorMessage">{error}</div>}
        <button type="submit">Sign In</button>
      </form>
    </main>
  );
}
