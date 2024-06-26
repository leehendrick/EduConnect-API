import { FastifyInstance } from "fastify";
import {loginHandler, registerUser} from "./user.controller";
import { $ref } from "./user.schemas";
import {findUsers} from "./user.service";

async function userRoute(server: FastifyInstance){
    server.post(
        '/create',
        {
            schema: {
                body: $ref('createUserSchema'),
                response: {
                    201: $ref('createUserResponseSchema'),
                }
            }
        },
        registerUser)

    server.post('/login',
        {
            schema: {
                body: $ref('loginSchema'),
                response: {
                    200: $ref('loginResponseSchema')
                }
            }
        },
        loginHandler)

    server.get('/list', {

    }, findUsers)
}

export default userRoute