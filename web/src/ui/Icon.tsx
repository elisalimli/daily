import React, { HTMLAttributes, FC } from "react";
import { IconBaseProps, IconType } from "react-icons/lib";

type IconProps = HTMLAttributes<HTMLDivElement> & {
  extraClassName?: string;
  icon: IconType | FC;
  iconProps?: IconBaseProps;
};

const Icon: FC<IconProps> = ({
  children,
  extraClassName = "",
  icon: IconComponent,
  iconProps = {},
  ...props
}) => {
  return (
    <div
      style={{ width: 40, height: 40 }}
      className={`group flex items-center justify-center hover:bg-primary-hover focus:bg-primary-100 rounded-full transition-colors duration-150 cursor-pointer ${extraClassName}`}
      {...props}
    >
      <IconComponent
        {...iconProps}
        className={`${iconProps?.className || ""} group-hover:text-primary-300`}
      />
    </div>
  );
};

export default Icon;
