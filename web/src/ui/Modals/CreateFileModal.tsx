import { Formik } from "formik";
import React from "react";
import Button from "../Form/Button";
import Modal, { ModalProps } from "../Form/Modal";
import MyForm from "../Form/MyForm";
import InputField from "../Form/TextField/InputField";
import Header from "../Typography/Header";
import { useCreateFileMutation } from "../../generated/graphql";
import { useFileFolderStore } from "../../stores/useFileFolderStore";
import { toErrorMap } from "../../utils/toErrorMap";

interface FormValues {
  name: string;
  unit: string;
}

const CreateFileModal: React.FC<ModalProps> = ({ handleModal, isOpen }) => {
  const [createFile] = useCreateFileMutation();
  const { rootId } = useFileFolderStore();

  return (
    <Modal isOpen={isOpen} handleModal={handleModal}>
      <Formik<FormValues>
        initialValues={{ name: "", unit: "" }}
        onSubmit={async (values, { setErrors }) => {
          const res = await createFile({
            variables: {
              input: { ...values, rootId: rootId || null },
            },
            update: (cache) => {
              cache.evict({ fieldName: "filesFolders" });
            },
          });

          const { ok, errors } = res.data.createFile;
          if (errors) setErrors(toErrorMap(errors));
          else if (ok) handleModal();
        }}
      >
        {({ isSubmitting }) => (
          <MyForm isModal width={550}>
            <Header as="h1" fontWeight="semibold" size="2xl">
              Create File
            </Header>
            <InputField name="name" placeholder="file's name" label="Name" />
            <InputField
              name="unit"
              placeholder="unit of the record"
              label="Unit"
            />
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

export default CreateFileModal;
