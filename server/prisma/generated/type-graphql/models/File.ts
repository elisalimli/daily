import { ObjectType, Field } from "type-graphql";

@ObjectType({
  isAbstract: true,
})
export class File {
  @Field()
  id!: string;

  @Field()
  name!: string;

  // Parent folder id
  @Field(() => String, { nullable: true })
  rootId: string;

  @Field(() => String)
  unit: string;

  // @Field(() => User)
  // creator!: User;

  @Field()
  creatorId!: string;

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;
}
