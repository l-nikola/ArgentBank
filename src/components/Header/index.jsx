export default function Header() {
  return (
    <nav className="header">
      <a href="/">
        <img src="public/images/argentBankLogo.png" alt="Argent Bank Logo" />
      </a>
      <div className="header__profile">
        <a href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          Name
        </a>
      </div>
      <div className="header__login">
        <a href="./sign-in.html">
          <i class="fa-solid fa-arrow-right-to-bracket"></i>
          Sign In
        </a>
      </div>
    </nav>
  );
}
