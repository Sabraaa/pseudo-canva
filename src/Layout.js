import React, { useState } from "react";
import Header from "./Header";
import Aside from "./Aside";

const Layout = ({ children }) => {
  const [showAside, setShowAside] = useState(true);

  return (
    <div>
      <Header handleToggle={setShowAside} />
      <div className="flex">
        {showAside ? <Aside /> : <></>}
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
