import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const createUserSchema = z.object({

    nome: z.string({
        required_error: 'Nome is required',
        invalid_type_error: 'Nome must be a string',
    }),
    email: z.string({
        required_error: 'Email is required',
        invalid_type_error: 'Email must be a string',
    }),
    telefone: z.number({
        invalid_type_error: 'Telefone must be a number',
    }),
    senha: z.string({
        required_error: 'Senha is required',
        invalid_type_error: 'Senha must be a string',
    }),
    genero: z.string({
        invalid_type_error: 'Género must be a string',
    }),
    user_typsId: z.number({
        required_error: 'userType is required',
        invalid_type_error: 'userType must be a number',
    }),
    user_statusId: z.number({
        required_error: 'Status is required',
        invalid_type_error: 'Status must be a number',
    }),
    addressesId: z.number({
        required_error: 'Address is required',
        invalid_type_error: 'Address must be a number',
    }),

});

const createUserResponseSchema = z.object(  {
    id: z.number(),
    nome: z.string({
        required_error: 'Nome is required',
        invalid_type_error: 'Nome must be a string',
    }),
    email: z.string({
        required_error: 'Email is required',
        invalid_type_error: 'Email must be a string',
    }),
})

const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
    })
})

const loginResponseSchema = z.object({
    accessToken: z.string(),
})


export type CreateUserInput = z.infer<typeof createUserSchema>;
export type LoginInput = z.infer<typeof loginSchema>;

export const {  schemas: userSchemas, $ref} = buildJsonSchemas({
    createUserSchema,
    createUserResponseSchema,
    loginSchema,
    loginResponseSchema,
})