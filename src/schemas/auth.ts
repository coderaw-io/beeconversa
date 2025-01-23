import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .email("O e-mail informado é inválido.")
    .min(1, "O campo e-mail é obrigatório."),
  password: z
    .string()
    .min(4, "A senha deve possuir no minímo 4 caracteres."),
});

export type LoginSchema = z.infer<typeof loginSchema>;