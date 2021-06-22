import { ObjectType, Field } from "type-graphql";
import { User } from "../models/User";
import { OkResponse } from "../shared/OkResponse";

@ObjectType()
export class RegisterResponse extends OkResponse {
  @Field(() => User, { nullable: true })
  user?: User;
}
