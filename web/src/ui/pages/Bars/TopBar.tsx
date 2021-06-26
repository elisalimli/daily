import React from "react";
import Header from "../../Typography/Header";
import SearchBar from "./SearchBar";

const TopBar: React.FC = () => (
  <div className="sticky top-0 flex justify-between py-2 px-4 bg-primary-900 border-b-default border-secondary-washed-out">
    <Header as="h1" fontWeight="bold" size="2xl">
      Home
    </Header>
    <SearchBar />
  </div>
);

export default TopBar;
