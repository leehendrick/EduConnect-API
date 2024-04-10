import { z } from "zod";

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
        invalid_type_error: 'Senha must be a number',
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

export type CreateUserInput = z.infer<typeof createUserSchema>