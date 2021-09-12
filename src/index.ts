import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import * as Express from 'express'
import { buildSchema } from 'type-graphql'

import { TodoResolver } from './resolvers/todoResolver'

async function main(){
    const schema = await buildSchema({
        resolvers: [TodoResolver],
        emitSchemaFile: true
    })

    const app = Express()

    const server = new ApolloServer({
        schema
    })

    await server.start()

    server.applyMiddleware({ app })

    app.listen(4000, () => console.log('Apollo Server running @ 4000'))
}

main()