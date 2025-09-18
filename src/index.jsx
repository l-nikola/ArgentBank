import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import Home from "./pages/Home/";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Transaction from "./pages/Transaction";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </Router>
);
