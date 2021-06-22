import { Arg, Ctx, Query, Resolver, UseMiddleware } from "type-graphql";
import { isAuth } from "../../../../../../src/middlewares/isAuth";
import { MyContext } from "../../../../../../src/types/MyContext";
import { Record } from "../../../models";

@Resolver(Record)
export class RecordsResolver {
  @Query(() => [Record], { nullable: true })
  @UseMiddleware(isAuth)
  async records(
    @Ctx() { prisma }: MyContext,
    @Arg("fileId", () => String)
    fileId: string
  ) {
    // @todo maybe only records which current user created
    return prisma.record.findMany({
      where: {
        fileId,
      },
    });
  }
}
