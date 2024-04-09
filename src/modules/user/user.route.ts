import { FastifyInstance } from "fastify";
import {registerUser} from "./user.controller";

async function userRoute(server: FastifyInstance){
    server.post('/create', registerUser)
}

export default userRoute