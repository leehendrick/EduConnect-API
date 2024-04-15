import Fastify, {FastifyReply, FastifyRequest} from "fastify";
import userRoute from "./modules/user/user.route";
import { userSchemas } from "./modules/user/user.schemas";
import fJwt from "@fastify/jwt";


const server = Fastify()

for (const schema of userSchemas){
    server.addSchema(schema);
}

server.register(fJwt, {
    secret: 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJFZHVDb25uZWN0LUFQSSIsIlVzZXJuYW1lIjoibGVlIiwiZXhwIjoxNzEzMjc1MDE4LCJpYXQiOjE3MTMxODg2MTh9.JrxgEu_hMoC7iwM__A6u3F1C9Hhd0ngA3BDsvQFGeus'
})

server.decorate(
    'auth',
    async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            await request.jwtVerify();
        }catch (e){
            return reply.send(e)
        }
})

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