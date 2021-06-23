import React from "react";
import { FilePlus, FolderPlus, MoreVertical, Plus } from "react-feather";
import { useMediaQuery } from "react-responsive";
import { useFileFolderStore } from "../../../stores/useFileFolderStore";
import { useModalStore } from "../../../stores/useModalStore";
import Dropdown from "../../Dropdown/Dropdown";
import DropdownElement from "../../Dropdown/DropdownElement";
import Button from "../../Form/Button";
import Header from "../../Header";
import Icon from "../../Icon";
import { iconSize } from "../../IconSize";
import CreateFileModal from "../../Modals/CreateFileModal";
import CreateFolderModal from "../../Modals/CreateFolderModal";
import CreateRecordModal from "../../Modals/CreateRecordModal";

const FeedSection = () => {
  const { isRecord } = useFileFolderStore();
  const {
    openFile,
    openFolder,
    openRecord,
    setOpenFile,
    setOpenFolder,
    setOpenRecord,
  } = useModalStore();
  const fullscreen = useMediaQuery({ maxWidth: 500 });

  const handleFolderModal = () => setOpenFolder(!openFolder);
  const handleFileModal = () => setOpenFile(!openFile);
  const handleRecordModal = () => setOpenRecord(!openRecord);

  const elements = (
    <>
      <DropdownElement Tag="button" onClick={handleRecordModal}>
        <Plus /> New Record
      </DropdownElement>

      <DropdownElement Tag="button" onClick={handleFileModal}>
        <FilePlus size={iconSize.small} />
        New File
      </DropdownElement>

      <DropdownElement Tag="button" onClick={handleFolderModal}>
        <FolderPlus className="mr-1" /> New Folder
      </DropdownElement>
    </>
  );

  return (
    <div className="pr-2 md:pr-0 pl-4 pb-4 flex justify-between items-center">
      <Header
        headerType="h1"
        color="text-primary-100"
        fontWeight="bold"
        extraClassName="text-sm md:text-2xl"
        size="2xl"
      >
        Dash
      </Header>

      <div className="flex items-center">
        {fullscreen ? (
          <Icon>
            <Dropdown elements={elements} button={<MoreVertical />} />
          </Icon>
        ) : (
          <div className="flex space-x-1">
            {isRecord ? (
              <Button
                onClick={handleRecordModal}
                variant="outline"
                fontWeight="bold"
                padding="py-2 px-3"
                icon={<Plus size={iconSize.medium} />}
                tooltip="Record"
                tooltipId="plusRecord"
              />
            ) : null}
            <Button
              onClick={handleFileModal}
              variant="outline"
              fontWeight="bold"
              padding="py-2 px-3"
              icon={<FilePlus size={iconSize.medium} />}
              tooltip="File"
              tooltipId="plusFile"
            />
            <Button
              onClick={handleFolderModal}
              variant="outline"
              fontWeight="bold"
              padding="py-2 px-3"
              icon={<FolderPlus size={iconSize.medium} />}
              tooltip="Folder"
              tooltipId="plusFolder"
            />
          </div>
        )}
      </div>

      <CreateFileModal isOpen={openFile} handleModal={handleFileModal} />
      <CreateFolderModal isOpen={openFolder} handleModal={handleFolderModal} />
      <CreateRecordModal isOpen={openRecord} handleModal={handleRecordModal} />
    </div>
  );
};

export default FeedSection;
