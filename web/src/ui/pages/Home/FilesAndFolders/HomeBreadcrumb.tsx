import React from "react";
import Link from "../../../utilities/Link";
import Slash from "./Slash";

const HomeBreadcrumb = () => {
  return (
    <Link extraClassName="flex text-primary-200" noColor href="/">
      <span>Home</span>
      <Slash />
    </Link>
  );
};

export default HomeBreadcrumb;
