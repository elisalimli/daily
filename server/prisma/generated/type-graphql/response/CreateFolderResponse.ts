import { ObjectType, Field } from "type-graphql";
import { Folder } from "../models";
import { OkResponse } from "../shared/OkResponse";

@ObjectType()
export class CreateFolderResponse extends OkResponse {
  @Field(() => Folder, { nullable: true })
  folder?: Folder;
}
