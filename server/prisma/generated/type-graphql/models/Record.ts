import { ObjectType, Field } from "type-graphql";
import { File } from "./File";

@ObjectType({
  isAbstract: true,
})
export class Record {
  @Field()
  id!: string;

  @Field()
  value!: string;

  @Field(() => File)
  file!: File;

  @Field()
  fileId!: string;

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;
}
