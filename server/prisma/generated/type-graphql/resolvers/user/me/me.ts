import { Ctx, Query, Resolver } from "type-graphql";
import { MyContext } from "../../../../../../src/types/MyContext";
import { User } from "../../../models/User";

@Resolver(User)
export class MeResolver {
  @Query(() => User, { nullable: true })
  me(@Ctx() { req, prisma }: MyContext) {
    const id = req.session.userId;
    if (!id) return null;
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
}
