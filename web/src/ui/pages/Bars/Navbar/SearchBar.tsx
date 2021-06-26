import React from "react";
import { BsSearch } from "react-icons/bs";
import { useScreenStore } from "../../../../stores/useScreenStore";
import Icon from "../../../Icon";

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
          className={`flex ${transition} w-225 focus-within:w-400 focus-within:ring-2 focus-within:ring-primary-300 focus-within:text-primary-200 bg-primary-800 rounded-sm`}
        >
          <div className="flex items-center justify-center ml-2">
            <BsSearch className={transition} />
          </div>
          <input className="bg-primary-800 w-full text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-button" />
        </label>
      )}
    </>
  );
};

export default SearchBar;
