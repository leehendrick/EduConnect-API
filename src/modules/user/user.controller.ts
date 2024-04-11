import {FastifyReply, FastifyRequest} from "fastify";
import * as repl from "repl";
import {createUser} from "./user.service";
import {CreateUserInput} from "./user.schemas";

export async function registerUser(
        request: FastifyRequest<{
            Body: CreateUserInput;
        }>,
        reply: FastifyReply
    ){

    const body = request.body

    try{

        const user = await createUser(body);

        return reply.code(201).send(user);

    }catch (e){
        console.log(e);
        return reply.code(500).send(e)
    }
}