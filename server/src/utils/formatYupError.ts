import { ValidationError } from "apollo-server-express";
import { FieldError } from "../../prisma/generated/type-graphql/shared/FieldError";

export const formatYupError = (err: ValidationError) => {
  const errors: Array<FieldError> = [];
  err.inner.forEach((e: { path: string; message: string }) => {
    errors.push({
      field: e.path,
      message: e.message,
    });
  });
  return errors;
};

//a/sdsd
