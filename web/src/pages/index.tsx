import { Router, useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import HomePage from "../ui/pages/HomePage";
import { withApollo } from "../utils/withApollo";

const Index = () => {
  const router = useRouter();
  // routing to the home page -> /home
  useEffect(() => {
    if (router) router.push("/home");
  }, [router]);

  return null;
};

export default Index;
