import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import Login from "./pages/Login";
import Home from "./pages/Home/";
import Profile from "./pages/Profile";
import Transaction from "./pages/Transaction";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </Router>
);
