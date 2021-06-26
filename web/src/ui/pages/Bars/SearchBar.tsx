import React from "react";
import { BsSearch } from "react-icons/bs";
import { useScreenStore } from "../../../stores/useScreenStore";
import Icon from "../../Icon";

const SearchBar = () => {
  const { isMobile } = useScreenStore();

  const transition = "transition-all duration-300 ease-in-out";

  return (
    <>
      {isMobile ? (
        <div className="flex items-center">
          <Icon
            icon={BsSearch}
            iconProps={{
              className: transition,
            }}
          />
        </div>
      ) : (
        <label
          className={`flex bg-primary-800 w-275 focus-within:w-400 focus-within:ring-2 focus-within:ring-primary-300 focus-within:text-primary-200 rounded-xl ${transition}`}
        >
          <div className="flex items-center justify-center ml-2">
            <BsSearch className={transition} />
          </div>
          <input
            placeholder="search for something"
            style={{ width: "90%" }}
            className="bg-primary-800 outline-none py-1 px-3 text-button"
          />
        </label>
      )}
    </>
  );
};

export default SearchBar;
