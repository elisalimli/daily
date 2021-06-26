import React from "react";
import Icon from "../../../Icon";
import Logo from "../../../Logo";
import Link from "../../../utilities/Link";

interface BrandProps {}

const Brand: React.FC<BrandProps> = () => (
  <div className="mb-2">
    <Link href="/home">
      <Icon
        icon={Logo}
        style={{ width: 45, height: 45 }}
        iconProps={{ width: 30, height: 30 }}
      />
    </Link>
  </div>
);

export default Brand;
