import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import "../index.css";
import "../App.css";
const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <h2>GEEKS</h2>
      </footer>
    </div>
  );
};

export default Layout;
