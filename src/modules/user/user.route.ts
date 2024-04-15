import { FastifyInstance } from "fastify";
import {loginHandler, registerUser} from "./user.controller";
import { $ref } from "./user.schemas";

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

        },
        loginHandler)
}

export default userRoute