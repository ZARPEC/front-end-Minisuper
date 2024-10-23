// Layout.js
import React from "react";
import Sidebar from "../../Sidebar"; // Importamos la sidebar

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
