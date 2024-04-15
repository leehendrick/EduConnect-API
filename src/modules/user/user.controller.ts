import {FastifyReply, FastifyRequest} from "fastify";
import {createUser, findUserByEmail} from "./user.service";
import {CreateUserInput, LoginInput} from "./user.schemas";

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

export async function loginHandler(
        request: FastifyRequest<{
            Body: LoginInput
        }>,
        reply:FastifyReply
    ){
        const body = request.body

        const user = await findUserByEmail(body.email)

        if (!user) {
            return reply.code(401).send({
                message: "Invalid email or password",
            })
        }
}