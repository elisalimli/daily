import { FieldError } from "../../../shared/FieldError";
import { File } from "../../../models/File";
import { CreateFileInput } from "../../../input/file/CreateFileInput";
import { CreateFolderInput } from "../../../input/folder/CreateFolderInput";

export const validateCreateFile = (
  parentFolder: File | null,
  input: CreateFileInput | CreateFolderInput
) => {
  const errors: FieldError[] = [];

  const { rootId } = input;

  // Check given parent folder is exist or not
  if (rootId && !parentFolder) {
    errors.push({
      field: "general",
      message: "This parent folder doesn't exist.",
    });
  }

  return {
    valid: errors.length === 0,
    errors,
  };
};
