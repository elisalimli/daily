import React from "react";
import Link from "../../utilities/Link";
import Slash from "./Slash";

interface Props {
  href: string;
}

const Breadcrumb: React.FC<Props> = ({ children, href }) => {
  return (
    <Link extraClassName="flex text-primary-200" noColor href={href}>
      <span>{children}</span>
      <Slash />
    </Link>
  );
};

export default Breadcrumb;
