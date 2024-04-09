import  Fastify  from "fastify";
import userRoute from "./modules/user/user.route";







const server = Fastify()

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