import { Formik } from "formik";
import React from "react";
import { useCreateFolderMutation } from "../../generated/graphql";
import { useFileFolderStore } from "../../stores/useFileFolderStore";
import Button from "../Form/Button";
import Modal, { ModalProps } from "../Form/Modal";
import MyForm from "../Form/MyForm";
import InputField from "../Form/TextField/InputField";
import Header from "../Typography/Header";
import { toErrorMap } from "../../utils/toErrorMap";

interface FormValues {
  name: string;
}

const CreateFolderModal: React.FC<ModalProps> = ({ handleModal, isOpen }) => {
  const [createFolder] = useCreateFolderMutation();
  const { rootId } = useFileFolderStore();

  return (
    <Modal isOpen={isOpen} handleModal={handleModal}>
      <Formik<FormValues>
        initialValues={{ name: "" }}
        onSubmit={async ({ name }, { setErrors }) => {
          const res = await createFolder({
            variables: {
              input: { name, rootId: rootId || null },
            },
            update: (cache) => {
              cache.evict({ fieldName: "filesFolders" });
            },
          });

          const { errors, ok } = res?.data?.createFolder;
          if (errors) setErrors(toErrorMap(errors));
          else if (ok) handleModal();
        }}
      >
        {({ isSubmitting }) => (
          <MyForm isModal width={550}>
            <Header as="h1" fontWeight="semibold" size="2xl">
              Create Folder
            </Header>
            <InputField name="name" placeholder="folders's name" label="Name" />
            <div className="flex justify-between px-2 mt-2">
              <Button
                fontWeight="normal"
                width={100}
                height={40}
                extraClassName="mt-4"
                loading={isSubmitting}
                variant="primary"
                type="submit"
              >
                Create
              </Button>
              <Button
                onClick={handleModal}
                fontWeight="normal"
                width={100}
                height={40}
                extraClassName="mt-4"
                variant="outline"
                type="button"
              >
                Close
              </Button>
            </div>
          </MyForm>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateFolderModal;
