import React from "react";
import Icon from "../../../Icon";
import Logo from "../../../Logo";
import Link from "../../../utilities/Link";

interface BrandProps {}

const Brand: React.FC<BrandProps> = () => (
  <div className="mb-2">
    <Link href="/home">
      <Icon icon={Logo} iconProps={{ width: 25, height: 25 }} />
    </Link>
  </div>
);

export default Brand;
