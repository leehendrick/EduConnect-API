import {z} from 'zod';
import {buildJsonSchemas} from "fastify-zod";

const createInscricaoSchema = z.object({});

const createInscricaoResponseSchema = z.object({});

const inscricaoResponseSchema = z.object({});

const inscricoesResponseSchema = z.array(inscricaoResponseSchema);

export type CreateInscricaoInput = z.infer<typeof createInscricaoSchema>;

export const {} = buildJsonSchemas({
    createInscricaoSchema,
    createInscricaoResponseSchema,
    inscricaoResponseSchema,
    inscricoesResponseSchema
})