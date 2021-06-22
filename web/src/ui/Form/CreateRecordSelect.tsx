import { useField } from "formik";
import React from "react";
import Select from "react-select";
import InputFieldError from "./TextField/InputFieldError";
import Label from "./TextField/Label";

export interface AutoCompleteFieldValues {
  value: string;
  label: string;
}

const options: AutoCompleteFieldValues[] = [
  { value: "RECORD", label: "Record" },
  { value: "FOLDER", label: "Folder" },
  { value: "FOLDER", label: "Folder" },
  { value: "FOLDER", label: "Folder" },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    "&:hover": {
      background: "var(--color-primary-600)",
    },
  }),
  menu: (provided) => ({
    background: "var(--color-primary-700)",
  }),
  control: () => ({
    display: "flex",
    flexDirection: "row",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "var(--color-button-text)",
    "&:hover": {
      color: "var(--color-primary-200)",
    },
  }),
  placeholder: () => ({
    color: "#A1A1AA",
  }),
};

interface Props {
  onChange: (res: AutoCompleteFieldValues[]) => void;
}

const CreateRecordSelect: React.FC<Props> = ({ onChange }) => {
  return (
    <>
      <Label htmlFor="tags">Type</Label>

      <Select
        menuIsOpen={true}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            primary25: "var(--color-primary-600)",
          },
        })}
        className="w-full text-button bg-primary-700 border-default border-primary-600 rounded-sm focus:ring-2 focus:ring-secondary text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
        // onChange={onChange}
        placeholder="select your tech tags"
        name="tags"
        options={options}
      />

      {/* @todo Like Input Field,use Formik "use..." stuff */}
      {/* <InputFieldError error={error} /> */}
    </>
  );
};

export default CreateRecordSelect;
