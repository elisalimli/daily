import { Arg, Ctx, Query, Resolver, UseMiddleware } from "type-graphql";
import { isAuth } from "../../../../../../src/middlewares/isAuth";
import { MyContext } from "../../../../../../src/types/MyContext";
import { File } from "../../../models";

@Resolver(File)
export class FileResolver {
  @Query(() => File, { nullable: true })
  @UseMiddleware(isAuth)
  async file(
    @Ctx() { prisma }: MyContext,
    @Arg("fileId")
    fileId: string
  ): Promise<File> {
    return prisma.file.findUnique({
      where: {
        id: fileId,
      },

      select: {
        unit: true,
      },
    }) as any;
  }
}
