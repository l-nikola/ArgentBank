export default function Login() {
  return (
    <main className="login">
      <i className="fa fa-user-circle"></i>
      <h1>Sign In</h1>
      <form>
        <div className="wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button>Sign In</button>
      </form>
    </main>
  );
}
