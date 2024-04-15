import {FastifyReply, FastifyRequest} from "fastify";
import {createUser, findUserByEmail, findUsers} from "./user.service";
import {CreateUserInput, LoginInput} from "./user.schemas";
import {verifyPassword} from "../../utils/hash";
import {server} from "../../app";

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

        const correctPassword = await verifyPassword(body.senha, user.senha)

        if (correctPassword){
            const {senha, ...rest} = user
            return { accessToken: server.jwt.sign(rest) }
        }

    return reply.code(401).send({
        message: "Invalid email or password",
    })
}

export async function getUsers(){
    const users = await findUsers()

    return users;
}