import React from "react";
import { v4 } from "uuid";
import Icon from "../../../Icon";
import Tooltip from "../../../Tooltip";
import Link from "../../../utilities/Link";
import { navLinks } from "./navLinks";

interface NavigatorProps {}

const Navigator: React.FC<NavigatorProps> = () => (
  <nav className="flex flex-col items-center space-y-1">
    {navLinks.map(({ icon: IconComponent, text, href }) => (
      <Link key={`navbar-link-${v4()}`} href={href}>
        <Icon
          data-tip
          data-for={`nav-${text}`}
          icon={IconComponent}
          iconProps={{ className: "text-2xl" }}
        />
        <Tooltip place="right" id={`nav-${text}`}>
          {text}
        </Tooltip>
      </Link>
    ))}
  </nav>
);

export default Navigator;
