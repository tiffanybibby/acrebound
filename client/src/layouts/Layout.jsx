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
      <div className="layout-footer">
      <footer>
        <Footer />
        </footer>
      </div>
    </div>
  );
}

export default Layout;