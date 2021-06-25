import Link from "next/link";
import React from "react";
import Icon from "../../Icon";
import Logo from "../../Logo";

interface BrandProps {}

const Brand: React.FC<BrandProps> = () => (
  <div className="mb-2">
    <Link href="/">
      <Icon>
        <Logo width={25} height={25} />
      </Icon>
    </Link>
  </div>
);

export default Brand;
