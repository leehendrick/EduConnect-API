import  Fastify  from "fastify";







const server = Fastify()

server.get('/healthcheck', async function (){
    return {
        status: 'OK',
    }
})

server.listen({ port: 4002, host: '0.0.0.0' }).then(() => {
    console.log('[-----SERVER RUNNING-----]')
})