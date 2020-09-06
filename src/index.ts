import {MikroORM} from '@mikro-orm/core';

import microConfig from './mikro-orm.config';
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {buildSchema} from 'type-graphql';

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();

    const app = express();
    const apolloServer = new ApolloServer({
        resolvers: []
    })
    app.listen(400, () => {
        console.log('server started on port 4000')
    })


}
main().catch((error) => {
    console.error(error)
})