import React from "react";
import Header from "../../Typography/Header";

interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = () => (
  <div className="sticky top-0 py-2 px-3 bg-accent-dark border-b-default border-secondary-washed-out">
    <Header as="h1" fontWeight="bold" size="2xl">
      Home
    </Header>
  </div>
);

export default TopBar;
