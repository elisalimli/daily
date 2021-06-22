import { ObjectType, Field } from "type-graphql";
import { User } from "./index";

@ObjectType({
  isAbstract: true,
})
export class Folder {
  @Field()
  id!: string;

  @Field()
  name!: string;

  // Parent folder id
  @Field(() => String, { nullable: true })
  rootId: string;

  creator!: User;

  @Field()
  creatorId!: string;

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;
}
