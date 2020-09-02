import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(microConfig);

  const post = orm.em.create(Post, { title: "First Post." });
  await orm.em.persistAndFlush(post);
  await orm.em.nativeInsert(Post, { title: "Second Post" });
};

console.log("Hello World!!!");
