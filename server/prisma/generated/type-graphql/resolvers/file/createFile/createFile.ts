import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import * as yup from "yup";
import { MyContext } from "../../../../../../src/types/MyContext";
import { formatYupError } from "../../../../../../src/utils/formatYupError";
import { File } from "../../../models";
import { CreateFileInput } from "../../../input/file/CreateFileInput";
import { isAuth } from "../../../../../../src/middlewares/isAuth";
import { error } from "./error";
import { validateCreateFile } from "./validate";
import { CreateFileResponse } from "../../../response/CreateFileResponse";

const { longName, longUnit, shortUnit } = error;
const schema = yup.object().shape({
  name: yup.string().max(30, longName),
  unit: yup.string().min(1, shortUnit).max(6, longUnit),
});

@Resolver(File)
export class CreateFileResolver {
  @Mutation(() => CreateFileResponse)
  @UseMiddleware(isAuth)
  async createFile(
    @Arg("input") input: CreateFileInput,
    @Ctx() { req, prisma }: MyContext
  ): Promise<CreateFileResponse> {
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

    const { valid, errors } = validateCreateFile(rootFolder as File, input);

    if (!valid)
      return {
        ok: false,
        errors,
      };

    const file = (await prisma.file.create({
      data: {
        ...input,
        creatorId: req.session?.userId!,
      },
    })) as any;

    return {
      ok: true,
      file,
    };
  }
}
