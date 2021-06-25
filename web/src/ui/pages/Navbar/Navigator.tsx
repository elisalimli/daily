import Link from "next/link";
import React from "react";
import Icon from "../../Icon";
import { navLinks } from "./navLinks";

interface NavigatorProps {}

const Navigator: React.FC<NavigatorProps> = () => (
  <nav className="flex flex-col items-center space-y-1">
    {navLinks.map(({ icon: IconComponent, href }) => (
      <Link href={href}>
        <Icon>
          <IconComponent className="text-2xl" />
        </Icon>
      </Link>
    ))}
  </nav>
);

export default Navigator;
