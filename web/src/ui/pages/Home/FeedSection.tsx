import React from "react";
import { FilePlus, FolderPlus, MoreVertical, Plus } from "react-feather";
import { useMediaQuery } from "react-responsive";
import { useFileFolderStore } from "../../../stores/useFileFolderStore";
import { useModalStore } from "../../../stores/useModalStore";
import Dropdown from "../../Dropdown/Dropdown";
import DropdownElement from "../../Dropdown/DropdownElement";
import Button from "../../Form/Button";
import Header from "../../Typography/Header";
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

  const buttons = [
    {
      onClick: handleRecordModal,
      Icon: Plus,
      tooltip: "Record",
      tooltipId: "plusRecord",
      isRecordButton: true,
    }
    {
      onClick: handleFolderModal,
      Icon: FolderPlus,
      tooltip: "Folder",
      tooltipId: "plusFolder",
    },
    {
      onClick: handleFileModal,
      Icon: FilePlus,
      tooltip: "File",
      tooltipId: "plusFile",
    },
  ];

  const dropdownElements = buttons.map(({ icon, onClick, tooltip }) => (
    <DropdownElement Tag="button" onClick={onClick}>
      {icon} <span className="ml-1">New {tooltip}</span>
    </DropdownElement>
  ));

  return (
    <div className="pr-2 md:pr-0 pl-4 pb-4 flex justify-between items-center">
      <Header
        as="h1"
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
            <Dropdown elements={dropdownElements} button={<MoreVertical />} />
          </Icon>
        ) : (
          <div className="flex space-x-1">
            {buttons.map(({ isRecordButton, Icon, ...rest }, i) =>
              !isRecordButton || (isRecordButton && isRecord) ? (
                <Button
                  key={`feed-section-button-${i}`}
                  variant="outline"
                  fontWeight="bold"
                  padding="p-2 px-3"
                  icon={<Icon />}
                  {...rest}
                />
              ) : null
            )}
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
