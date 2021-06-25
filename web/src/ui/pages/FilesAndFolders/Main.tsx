import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useFilesFoldersQuery } from "../../../generated/graphql";
import { useFileFolderStore } from "../../../stores/useFileFolderStore";
import CenteredLoader from "../../Loader/CenteredLoader";
import FileFolderWrapper from "./NavigationWrapper";
import BreadcrumbWrapper from "./BreadcrumbWrapper";
import Record from "../Record/Record";

const Main = () => {
  const router = useRouter();
  const idx: string[] = router.query?.rootId as string[];
  const currentFileOrFolderId = idx ? idx[idx.length - 1] : null;
  const {
    setCurrentFileOrFolderId,
    isRecord,
    loading: fileLoading,
  } = useFileFolderStore();

  useEffect(() => {
    setCurrentFileOrFolderId(currentFileOrFolderId);
  }, [router.query]);

  const { data, loading, error } = useFilesFoldersQuery({
    variables: {
      rootId: currentFileOrFolderId,
    },
  });
  console.log("here we are", data);
  if (error) {
    console.error(error);
    return <div>Something went wrong,please try again.</div>;
  }
  if (loading) return <CenteredLoader />;

  return (
    <div>
      <BreadcrumbWrapper />
      {isRecord && !fileLoading ? (
        <Record />
      ) : (
        <FileFolderWrapper
          idx={idx}
          files={data?.filesFolders?.files || []}
          folders={data?.filesFolders?.folders || []}
        />
      )}
    </div>
  );
};

export default Main;
