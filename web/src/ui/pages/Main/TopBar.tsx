import React from "react";
import Header from "../../Typography/Header";

interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = () => (
  <div>
    <Header as="h1" fontWeight="bold" size="2xl">
      Home
    </Header>
  </div>
);

export default TopBar;
