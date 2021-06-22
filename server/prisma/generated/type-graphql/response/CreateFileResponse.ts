import { ObjectType, Field } from "type-graphql";
import { File } from "../models";
import { OkResponse } from "../shared/OkResponse";

@ObjectType()
export class CreateFileResponse extends OkResponse {
  @Field(() => File, { nullable: true })
  file?: File;
}
