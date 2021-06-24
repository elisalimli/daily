import React from "react";
import Logo from "../Logo";

const LeftPanel: React.FC = () => {
  return (
    <div className="sticky top-0 h-screen pt-5">
      <Logo />
    </div>
  );
};

export default LeftPanel;
