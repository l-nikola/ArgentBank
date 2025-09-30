import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const firstName = useSelector((state) => state.user.firstName);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(clearUser());
    navigate("/login");
  };

  const handleLogo = () => {
    navigate("/");
  };

  const handleProfile = () => {
    if (firstName && token) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <header>
      <a onClick={handleLogo}>
        <img src="/images/argentBankLogo.png" alt="Argent Bank Logo" />
      </a>
      <nav>
        <ul>
          <li>
            <a onClick={handleProfile}>
              <i className="fa-solid fa-user"></i>
              {firstName ? firstName : "Name"}
            </a>
          </li>
          {firstName ? (
            <li>
              <a href="#" onClick={handleSignOut}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                Sign Out
              </a>
            </li>
          ) : (
            <li>
              <a href="/login">
                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                Sign In
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
