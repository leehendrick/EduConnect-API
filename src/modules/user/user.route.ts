import { FastifyInstance } from "fastify";
import {registerUser} from "./user.controller";
import { $ref } from "./user.schemas";
import {createUser} from "./user.service";

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
}

export default userRoute