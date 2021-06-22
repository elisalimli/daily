import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import { buildSchema } from "type-graphql";
import { MyContext } from "./types/MyContext";
import { redis, sessionMiddleware } from "./utils";
import {
  RegisterResolver,
  LoginResolver,
  LogoutResolver,
  CreateFileResolver,
  CreateFolderResolver,
  FilesFoldersResolver,
  CreateRecordResolver,
  MeResolver,
  FoldersResolver,
  RecordsResolver,
  FileResolver,
} from "../prisma/generated/type-graphql";

const PORT = process.env.PORT || 4000;

const main = async () => {
  const app = express();
  // app.set("trust proxy", 1);

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.use(sessionMiddleware);

  const schema = await buildSchema({
    resolvers: [
      // Mutations
      RegisterResolver,
      LogoutResolver,
      LoginResolver,
      CreateFileResolver,
      CreateFolderResolver,
      CreateRecordResolver,
      //Queries
      MeResolver,
      FilesFoldersResolver,
      FoldersResolver,
      RecordsResolver,
      FileResolver,
    ],
    validate: false,
  });

  const prisma = new PrismaClient();

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }): MyContext => ({
      req: req as any,
      res,
      prisma,
      redis,
    }),
    playground: true,
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
};

main().catch((err) => {
  console.log(err);
});
