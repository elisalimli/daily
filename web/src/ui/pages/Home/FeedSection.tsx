import React, { useState } from "react";
import { FilePlus, Plus, FolderPlus, MoreVertical } from "react-feather";
import Button from "../../Form/Button";
import Header from "../../Header";
import { iconSize } from "../../IconSize";
import CreateFileModal from "../../Modals/CreateFileModal";
import CreateFolderModal from "../../Modals/CreateFolderModal";
import { useModalStore } from "../../../stores/useModalStore";
import CreateRecordModal from "../../Modals/CreateRecordModal";
import { useFileFolderStore } from "../../../stores/useFileFolderStore";
import { useMediaQuery } from "react-responsive";
import DropdownElement from "../../Dropdown/DropdownElement";
import Dropdown from "../../Dropdown/Dropdown";
import Icon from "../../Icon";

const dropdownElements = Array.from({ length: 3 }).map(() => (
  <DropdownElement>Profile</DropdownElement>
));
const dropdownButton = <MoreVertical />;
export const userDropdownProps = {
  button: dropdownButton,
  elements: dropdownElements,
};

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
        <FilePlus />
        New File
      </DropdownElement>

      <DropdownElement Tag="button" onClick={handleFolderModal}>
        <FolderPlus /> New Folder
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
          <>
            <div className="flex space-x-1">
              {isRecord ? (
                <>
                  <Button
                    onClick={handleRecordModal}
                    variant="outline"
                    fontWeight="bold"
                    padding="py-2 px-3"
                    icon={<Plus size={iconSize.medium} className="mr-1" />}
                  >
                    Record
                  </Button>
                  <div
                    style={{ height: 30, width: 2 }}
                    className="bg-primary-300 mx-2  rounded-5"
                  />
                </>
              ) : null}
              <Button
                onClick={handleFileModal}
                variant="outline"
                fontWeight="bold"
                padding="py-2 px-3"
                icon={<FilePlus size={iconSize.medium} className="mr-1" />}
              >
                File
              </Button>
              <Button
                onClick={handleFolderModal}
                variant="outline"
                fontWeight="bold"
                padding="py-2 px-3"
                icon={<FolderPlus size={iconSize.medium} className="mr-1" />}
              >
                Folder
              </Button>
            </div>
          </>
        )}
      </div>

      <CreateFileModal isOpen={openFile} handleModal={handleFileModal} />
      <CreateFolderModal isOpen={openFolder} handleModal={handleFolderModal} />
      <CreateRecordModal isOpen={openRecord} handleModal={handleRecordModal} />
    </div>
  );
};

export default FeedSection;
