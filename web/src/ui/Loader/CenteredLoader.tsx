import React from "react";
import Loader from "./Loader";
import Logo from "../Logo";

interface Props {
  logo?: boolean;
}

const CenteredLoader: React.FC<Props> = ({ logo = true }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {logo ? <Logo /> : <Loader />}
    </div>
  );
};

export default CenteredLoader;
