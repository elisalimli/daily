import React from "react";
import Brand from "./Brand";
import Navigator from "./Navigator";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => (
  <div className="flex flex-col items-end sticky top-0 h-screen border-r-default border-secondary-washed-out p-2">
    <Brand />
    <div className="flex flex-col justify-between h-full">
      <Navigator />
    </div>
  </div>
);

export default Navbar;
