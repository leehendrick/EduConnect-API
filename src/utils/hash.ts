// @ts-ignore
import bcrypt from "bcrypt";


const  saltRound = 10;
export async function hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, saltRound);
}

export  async function verifyPassword(password: string): Promise<string>{
    return await bcrypt.compare(password, hashPassword);
}
