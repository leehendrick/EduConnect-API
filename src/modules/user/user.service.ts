import prisma from "../../utils/prisma";
import {CreateUserInput} from "./user.schemas";
import {hashPassword} from "../../utils/hash";

export async function createUser(input: CreateUserInput) {

    const {senha, ...rest} = input;

    // @ts-ignore
    const  password  = await hashPassword(senha);
    console.log(password);
    //inputWithHash.senha = await hashPassword(input.senha);

    const user = await prisma.users.create({
        data: {...rest, senha: password}
    })

    return user;
}

export async function findUserByEmail(email: string){
    return prisma.users.findUnique({
        where: {
            email,
        },
    })
}

export async function findUsers(){
    return prisma.users.findMany({
        select: {
            id: true,
            nome: true,
            email: true,
            telefone: true,
            genero: true,
            data_registro: true,
            user_typsId: true,
            user_statusId: true,
            addressesId: true
        }
    });
}