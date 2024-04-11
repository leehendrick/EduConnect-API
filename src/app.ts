import  Fastify  from "fastify";
import userRoute from "./modules/user/user.route";
import { userSchemas } from "./modules/user/user.schemas";


const server = Fastify()

for (const schema of userSchemas){
    server.addSchema(schema);
}

server.register(userRoute, {
    prefix: 'api/users'
})

server.get('/healthcheck', async function (){
    return {
        status: 'OK',
    }
})

server.listen({ port: 4002, host: '0.0.0.0' }).then(() => {
    console.log('[-----SERVER RUNNING-----]')
})