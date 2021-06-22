import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import * as yup from "yup";
import { isAuth } from "../../../../../../src/middlewares/isAuth";
import { MyContext } from "../../../../../../src/types/MyContext";
import { formatYupError } from "../../../../../../src/utils/formatYupError";
import { Folder } from "../../../models/Folder";
import { CreateFolderResponse } from "../../../response/CreateFolderResponse";
import { validateCreateFile } from "../../file/createFile/validate";
import { error } from "./error";
import { CreateFolderInput } from "../../../input/folder/CreateFolderInput";

const { longName } = error;
const schema = yup.object().shape({
  name: yup.string().max(30, longName),
});

@Resolver(Folder)
export class CreateFolderResolver {
  @Mutation(() => CreateFolderResponse)
  @UseMiddleware(isAuth)
  async createFolder(
    @Arg("input") input: CreateFolderInput,
    @Ctx() { req, prisma }: MyContext
  ): Promise<CreateFolderResponse> {
    try {
      await schema.validate(input, { abortEarly: false });
    } catch (err: any) {
      return {
        ok: false,
        errors: formatYupError(err),
      };
    }

    let rootFolder;
    if (input.rootId) {
      rootFolder = await prisma.folder.findUnique({
        where: {
          id: input.rootId,
        },
      });
    }

    const { valid, errors } = validateCreateFile(rootFolder as any, input);

    if (!valid)
      return {
        ok: false,
        errors,
      };

    const { name, rootId } = input;

    const folder = (await prisma.folder.create({
      data: {
        name,
        rootId,
        creatorId: req.session?.userId!,
      },
    })) as any;

    return {
      ok: true,
      folder,
    };
  }
}
