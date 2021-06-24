import React, { HTMLAttributes } from "react";

type IconProps = HTMLAttributes<HTMLDivElement> & {
  extraClassName?: string;
};

const Icon: React.FC<IconProps> = ({
  children,
  extraClassName = "",
  ...props
}) => {
  return (
    <div
      style={{ width: 40, height: 40 }}
      className={`flex items-center justify-center hover:bg-primary-100 rounded-full transition-colors duration-150 cursor-pointer ${extraClassName}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Icon;
