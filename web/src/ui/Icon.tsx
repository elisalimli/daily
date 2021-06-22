import React from "react";

const Icon: React.FC = ({ children }) => {
  return (
    <div
      style={{ width: 40, height: 40 }}
      className="rounded-full hover:bg-primary-700 flex justify-center items-center  cursor-pointer"
    >
      {children}
    </div>
  );
};

export default Icon;
