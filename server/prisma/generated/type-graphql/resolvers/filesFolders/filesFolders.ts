import { Ctx, Query, Resolver, UseMiddleware, Arg } from "type-graphql";
import { FilesFoldersResponse } from "../../response/FilesFoldersResponse";
import { isAuth } from "../../../../../src/middlewares/isAuth";
import { MyContext } from "../../../../../src/types/MyContext";
import { File } from "../../models/File";

@Resolver(File)
export class FilesFoldersResolver {
  @Query(() => FilesFoldersResponse, { nullable: true })
  @UseMiddleware(isAuth)
  async filesFolders(
    @Ctx() { req, prisma }: MyContext,
    @Arg("rootId", () => String, { nullable: true })
    rootId: string
  ): Promise<FilesFoldersResponse> {
    console.log("rootiD", rootId, req.session.userId);
    const query = {
      where: {
        creatorId: req.session.userId as string,
        rootId: rootId || null,
      },
    };

    const files = (await prisma.file.findMany(query)) as any;
    const folders = (await prisma.folder.findMany(query)) as any;

    return {
      files,
      folders,
    };
  }
}
