import Fastify, {FastifyReply, FastifyRequest} from "fastify";
import userRoute from "./modules/user/user.route";
import { userSchemas } from "./modules/user/user.schemas";
import fJwt from "@fastify/jwt";
import dotenv from "dotenv";


export const server = Fastify()
dotenv.config();

// Estende o objeto FastifyInstance para incluir uma propriedade 'auth'
declare module "fastify" {
    export  interface  FastifyInstance {
        auth: any;
    }
}

// Adiciona os esquemas de usuário ao servidor
for (const schema of userSchemas){
    server.addSchema(schema);
}


// Registra o plugin 'fJwt' para autenticação via JWT
// @ts-ignore
server.register(fJwt, {
    secret: process.env.JWT_SECRET,
})

// Define um decorador 'auth' para verificar tokens JWT nas requisições
server.decorate(
    'auth',
    async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            await request.jwtVerify();
        }catch (e){
            return reply.send(e)
        }
})

// Registra as rotas de usuário com um prefixo '/api/users'
server.register(userRoute, {
    prefix: 'api/users'
})

// Rota de verificação de saúde do servidor
server.get('/healthcheck', async function (){
    return {
        status: 'OK',
    }
})

// Inicia o servidor na porta 4002 e em todas as interfaces de rede
server.listen({ port: 4002, host: '0.0.0.0' }).then(() => {
    console.log('[-----SERVER RUNNING-----]')
})