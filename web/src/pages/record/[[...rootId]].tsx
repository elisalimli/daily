import React from "react";
import HomePage from "../../ui/pages/HomePage";
import {withApollo} from "../../utils/withApollo";

const Wrapper = () => {
  return <HomePage />;
};

export default withApollo({ ssr: true })(Wrapper);
