import React from "react";

interface DropdownElementProps {
  Tag?: string;
}

const DropdownElement: React.FC<DropdownElementProps> = ({
  Tag,
  children,
  ...props
}) => {
  return (
    <Tag
      {...props}
      className="min-w-full flex px-4 py-2 cursor-pointer transition-colors duration-200 hover:bg-primary-700 font-semibold"
    >
      {children}
    </Tag>
  );
};

export default DropdownElement;
