import { Formik } from "formik";
import React from "react";
import Button from "../Form/Button";
import Modal, { ModalProps } from "../Form/Modal";
import MyForm from "../Form/MyForm";
import InputField from "../Form/TextField/InputField";
import Header from "../Header";
import { useCreateRecordMutation } from "../../generated/graphql";
import { useFileFolderStore } from "../../stores/useFileFolderStore";
import { toErrorMap } from "./../../utils/toErrorMap";

interface FormValues {
  value: number;
}

const CreateRecordModal: React.FC<ModalProps> = ({ handleModal, isOpen }) => {
  const [createRecord] = useCreateRecordMutation();
  const { rootId, currentFileOrFolderId } = useFileFolderStore();

  return (
    <Modal isOpen={isOpen} handleModal={handleModal}>
      <Formik<FormValues>
        initialValues={{ value: 0 }}
        onSubmit={async (values, { setErrors }) => {
          const res = await createRecord({
            variables: {
              input: { ...values, fileId: currentFileOrFolderId },
            },
            update: (cache) => {
              cache.evict({ fieldName: "records" });
            },
          });
          const errors = res.data.createRecord.errors;
          if (errors) setErrors(toErrorMap(errors));
          else if (res.data?.createRecord.ok) handleModal();
        }}
      >
        {({ isSubmitting }) => (
          <MyForm isModal width={550}>
            <Header headerType="h1" fontWeight="semibold" size="2xl">
              Create Record
            </Header>
            <InputField
              name="value"
              placeholder="please enter value"
              label="Value"
              type="number"
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
                type="submit"
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

export default CreateRecordModal;
