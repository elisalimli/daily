import { Field, InputType } from "type-graphql";

@InputType()
export class CreateFileInput {
  @Field()
  name!: string;

  @Field(() => String, { nullable: true })
  rootId: string;

  @Field(() => String)
  unit: string;
}
