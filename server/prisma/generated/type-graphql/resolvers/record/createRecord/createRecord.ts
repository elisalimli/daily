// @todo change 1000000 -> 10 milion
// use 3rd party package ??
import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { isAuth } from "../../../../../../src/middlewares/isAuth";
import { MyContext } from "../../../../../../src/types/MyContext";
import { CreateRecordInput } from "../../../input/record/CreateRecordInput";
import { Record } from "../../../models";
import { CreateRecordResponse } from "../../../response/CreateRecordResponse";
import * as yup from "yup";
import { formatYupError } from "../../../../../../src/utils/formatYupError";

const schema = yup.object().shape({
  name: yup
    .number()
    .min(-2147483647, "too small number")
    .max(2147483647, "too big number"),
});

@Resolver(Record)
export class CreateRecordResolver {
  @Mutation(() => CreateRecordResponse)
  @UseMiddleware(isAuth)
  async createRecord(
    @Arg("input") input: CreateRecordInput,
    @Ctx() { prisma }: MyContext
  ): Promise<CreateRecordResponse> {
    try {
      await schema.validate(input, { abortEarly: false });
    } catch (err: any) {
      return {
        ok: false,
        errors: formatYupError(err),
      };
    }
    const record = (await prisma.record.create({
      data: { ...input } as any,
    })) as any;

    return {
      ok: true,
      record,
    };
  }
}
