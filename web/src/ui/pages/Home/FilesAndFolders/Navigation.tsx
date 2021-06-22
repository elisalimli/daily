import React from "react";
import { Folder } from "react-feather";
import {
  FileFragmentFragment,
  FolderFragmentFragment,
} from "../../../../generated/graphql";
import { iconSize } from "../../../IconSize";
import Link from "../../../utilities/Link";

interface NavigationProps {
  fileFolder: FileFragmentFragment | FolderFragmentFragment;
  idx: string[];
}

const Navigation: React.FC<NavigationProps> = ({
  fileFolder: { id, name, __typename },
  idx,
}) => {
  return (
    <Link
      key={`record-${id}`}
      href={`/record${idx ? `/${idx.join("/")}` : ""}/${id}`}
    >
      <div
        style={{ minHeight: 50 }}
        className="flex items-center bg-primary-800 hover:bg-primary-700 text-primary-100 p-4 rounded-5 shadow-md transition-colors duration-300 ease-in-out select-none"
      >
        {__typename === "Folder" ? (
          <>
            <Folder size={iconSize.small} />
            <span className="mx-2">/</span>
          </>
        ) : null}
        <span>{name} </span>
      </div>
    </Link>
  );
};

export default Navigation;
