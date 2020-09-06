import {Post} from "./entities/POST";
import {__prod__} from "./constants";
import {MikroORM} from '@mikro-orm/core';
import path from "path";

export default {
    migrations: {
        path: path.join(__dirname, 'migrations'), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/, //
    },
    entities: [Post],
    dbName: "lireddit",
    type: "postgresql",
    clientUrl:"postgresql://postgres@127.0.0.1:5432",
    user:"postgres",
    password:"Sliit123!@#",
    baseDir:__dirname,
    debug: !__prod__,


} as Parameters<typeof MikroORM.init>[0]