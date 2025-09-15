export default function Header() {
  return (
    <header>
      <a href="/">
        <img src="/images/argentBankLogo.png" alt="Argent Bank Logo" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="./sign-in.html">
              <i className="fa-solid fa-user"></i>
              Name
            </a>
          </li>
          <li>
            <a href="./sign-in.html">
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
              Sign In
            </a>
          </li>
          {/* <li>
          <a href="./sign-in.html">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          Sign Out
          </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
