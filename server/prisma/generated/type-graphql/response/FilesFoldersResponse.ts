import { Field, ObjectType } from "type-graphql";
import { File } from "../models";
import { Folder } from "../models/Folder";

@ObjectType()
export class FilesFoldersResponse {
  @Field(() => [File], { nullable: true })
  files?: File[] | undefined;

  @Field(() => [Folder], { nullable: true })
  folders?: Folder[] | undefined;
}
