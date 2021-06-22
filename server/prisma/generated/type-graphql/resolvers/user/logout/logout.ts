import { Ctx, Mutation, Resolver } from "type-graphql";
import { MyContext } from "../../../../../../src/types/MyContext";
import { User } from "../../../models/User";
import { COOKIE_NAME } from "../../../../../../src/constants";

@Resolver(User)
export class LogoutResolver {
  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) =>
      req.session.destroy((err: Error) => {
        res.clearCookie(COOKIE_NAME);
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }
        resolve(true);
      })
    );
  }
}
