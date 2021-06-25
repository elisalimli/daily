import React from "react";
import {
  FontWeightProps,
  sizeClassNames,
  fontWeightClassNames,
} from "../shared/classNames";

interface HeaderProps extends FontWeightProps {
  size: keyof typeof sizeClassNames;
  centered?: boolean;
  color?: string;
  extraClassName?: string;
  as: any;
}

const Header: React.FC<HeaderProps> = ({
  children,
  size,
  fontWeight = "normal",
  centered,
  color = "text-button",
  extraClassName = "",
  as: Type,
}) => {
  return (
    <Type
      className={`flex items-center ${color} ${sizeClassNames[size]} ${
        fontWeightClassNames[fontWeight]
      } ${centered ? "justify-center" : ""} ${extraClassName}`}
    >
      {children}
    </Type>
  );
};

export default Header;
