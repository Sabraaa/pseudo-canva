import React, { useState } from "react";
import Header from "./Header";
import Aside from "./Aside";

const Layout = ({ children }) => {
  const [showAside, setShowAside] = useState(true);

  return (
    <div>
      <Header handleToggle={setShowAside} />
      {showAside ? <Aside /> : <></>}
      <main className={showAside ? "ml-[200px]" : "ml-0"}>{children}</main>
    </div>
  );
};

export default Layout;
