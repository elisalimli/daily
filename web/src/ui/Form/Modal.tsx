import React from "react";
import ReactModal from "react-modal";

const modalStyle = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "0px",
    background: undefined,
  },

  overlay: {
    zIndex: 100,
    background: "rgba(0,0,0,0.8)",
  },
};

export interface ModalProps {
  isOpen: boolean;
  handleModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, handleModal }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleModal}
      style={modalStyle}
      contentLabel="Create Record Modal"
    >
      <div style={{ width: 400 }} className="bg-primary-800 py-2 shadow-lg">
        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;
