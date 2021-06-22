import { ObjectType, Field } from "type-graphql";
import { Record } from "../models";
import { OkResponse } from "../shared/OkResponse";

@ObjectType()
export class CreateRecordResponse extends OkResponse {
  @Field(() => Record, { nullable: true })
  record?: Record;
}
