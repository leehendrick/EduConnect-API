import prisma from "../../utils/prisma";
import {CreateUserInput} from "./user.schemas";

export async function createUser(input: CreateUserInput) {
    const user = await prisma.users.create({
        data: input,
    })
}