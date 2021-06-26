import React from "react";
import { v4 } from "uuid";
import Icon from "../../../Icon";
import Link from "../../../utilities/Link";
import { navLinks } from "../Navbar/navLinks";

const BottomBar: React.FC = () => {
  return (
    <div
      className="min-w-full fixed bottom-0 grid py-1 px-2 bg-primary-900 border-t-default border-secondary-washed-out"
      style={{
        gridTemplateColumns: `repeat(${navLinks?.length || 1}, minmax(0, 1fr))`,
      }}
    >
      {navLinks.map(({ icon: IconComponent, href }) => (
        <div key={`bottom-bar-link-${v4()}`} className="flex justify-center">
          <Link href={href}>
            <Icon
              icon={IconComponent}
              iconProps={{ strokeWidth: 0.1, className: "text-2xl" }}
              style={{ width: 50, height: 50 }}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BottomBar;
