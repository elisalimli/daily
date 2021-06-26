import React from "react";
import Brand from "./Brand";
import Navigator from "./Navigator";
import Profile from "./Profile";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => (
  <div className="ml-auto">
    <div className="flex flex-col justify-between items-center sticky top-0 h-screen px-1 py-2">
      <div>
        <Brand />
        <Navigator />
      </div>
      <Profile />
    </div>
  </div>
);

export default Navbar;
