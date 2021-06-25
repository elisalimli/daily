import React from "react";
import HomePage from "../ui/pages/HomePage";
import { withApollo } from "../utils/withApollo";

const Index = () => {
  return <HomePage />;
};

export default withApollo({ ssr: true })(Index);
