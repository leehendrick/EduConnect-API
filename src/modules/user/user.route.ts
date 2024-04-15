import { FastifyInstance } from "fastify";
import {registerUser} from "./user.controller";
import { $ref } from "./user.schemas";

async function userRoute(server: FastifyInstance){
    server.post(
        '/create',
        registerUser)
}

export default userRoute