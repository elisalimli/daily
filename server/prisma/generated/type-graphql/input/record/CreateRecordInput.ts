import { Field, InputType, Int } from "type-graphql";

@InputType()
export class CreateRecordInput {
  @Field(() => Int)
  value!: number;

  @Field(() => String)
  fileId!: string;
}
