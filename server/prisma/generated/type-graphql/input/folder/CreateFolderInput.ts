import { Field, InputType } from "type-graphql";

@InputType()
export class CreateFolderInput {
  @Field()
  name!: string;

  @Field(() => String, { nullable: true })
  rootId: string;
}
