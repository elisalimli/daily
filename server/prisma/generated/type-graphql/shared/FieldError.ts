import * as TypeGraphql from "type-graphql";

@TypeGraphql.ObjectType()
export class FieldError {
  @TypeGraphql.Field()
  field: string;

  @TypeGraphql.Field()
  message: string;
}
