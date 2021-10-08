import React from "react";
import "./Layout.css"
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Layout(props) {
  const { currentOwner, handleLogout } = props;

  return (
    <div className="layout">
      <header>
      <Nav currentOwner={currentOwner} handleLogout={handleLogout} />
      </header>
      <div className="children">{props.children}</div>
      <footer>
      <div className="layout-footer">
        <Footer />
      </div>
        </footer>
    </div>
  );
}

export default Layout;