import React from "react";
import {
  FileFragmentFragment,
  FolderFragmentFragment,
} from "../../../../generated/graphql";
import Navigation from "./Navigation";

interface Props {
  files: FileFragmentFragment[];
  folders: FolderFragmentFragment[];
  idx: string[];
}

const NavigationWrapper: React.FC<Props> = ({ files, folders, idx }) => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
      {[...folders, ...files].map((fileFolder) => (
        <Navigation
          key={`fileOrFolder-${fileFolder.id}`}
          fileFolder={fileFolder}
          idx={idx}
        />
      ))}
    </div>
  );
};

export default NavigationWrapper;
