import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useMeQuery } from "../../generated/graphql";
import CenteredLoader from "../Loader/CenteredLoader";

interface Props {}

const UnProtectedRoute: React.FC<Props> = ({ children }) => {
  const { data, loading } = useMeQuery();
  const router = useRouter();

  useEffect(() => {
    if (!loading && data?.me) {
      router.replace((router.query.next || "/") as string);
    }
  }, [loading, data]);
  if (loading) return <CenteredLoader />;

  return <div>{children}</div>;
};

export default UnProtectedRoute;
