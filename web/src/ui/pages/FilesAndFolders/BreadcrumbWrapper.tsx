import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useFoldersQuery } from "../../../generated/graphql";
import { useFileFolderStore } from "../../../stores/useFileFolderStore";
import Breadcrumb from "./Breadcrumb";

const BreadcrumbWrapper: React.FC = () => {
  const router = useRouter();
  const rootIds: string[] = router.query?.rootId as string[];
  const { setRootId, currentFileOrFolderId, setIsRecord, setLoading } =
    useFileFolderStore();

  const { data, loading } = useFoldersQuery({
    variables: { rootIds },
    skip: !rootIds?.length,
  });

  useEffect(() => {
    const folders = data?.folders;

    if (loading) return;
    if (folders?.length) {
      const rootFolder = data.folders[data.folders.length - 1];
      setRootId(rootFolder.id);
      const idx = rootIds[rootIds.length - 1];
      const folderOrRecord = folders.filter(({ id }) => id === idx);

      if (!folderOrRecord.length) setIsRecord(true);
      else setIsRecord(false);
    } else if (rootIds?.length && !folders?.length) setIsRecord(true);
    else if (!rootIds?.length) setIsRecord(false);

    setLoading(false);
  }, [rootIds, currentFileOrFolderId, loading]);

  if (loading) return <div>loading...</div>;

  return (
    <div className="mb-2 px-4">
      {rootIds?.length && data?.folders.length ? (
        <div className="flex">
          <Breadcrumb href="/">Home</Breadcrumb>

          {data.folders.map(({ id, name }, i) => (
            <Breadcrumb
              href={`/record/${rootIds.slice(0, i + 1).join("/")}`}
              key={`navigate-item-${id}`}
            >
              {name}
            </Breadcrumb>
          ))}
        </div>
      ) : (
        <Breadcrumb href="/">Home</Breadcrumb>
      )}
    </div>
  );
};

export default BreadcrumbWrapper;
