import { Arg, Ctx, Query, Resolver, UseMiddleware } from "type-graphql";
import { isAuth } from "../../../../../../src/middlewares/isAuth";
import { MyContext } from "../../../../../../src/types/MyContext";
import { Folder } from "../../../models/Folder";

@Resolver(Folder)
export class FoldersResolver {
  @Query(() => [Folder], { nullable: true })
  @UseMiddleware(isAuth)
  async folders(
    @Ctx() { prisma }: MyContext,
    @Arg("rootIds", () => [String])
    rootIds: string[]
  ): Promise<Folder[]> {
    return prisma.folder.findMany({
      where: {
        id: {
          in: rootIds,
        },
      },

      select: {
        id: true,
        name: true,
      },
    }) as any;
  }
}
