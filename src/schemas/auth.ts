import { z } from "zod";

export const loginSchema = z.object({
  tenant: z
    .string()
    .min(5, "O campo empresa é obrigatório e deve ser maior que 5 caracteres."),
  username: z
    .string()
    .email("O e-mail informado é inválido.")
    .min(1, "O campo e-mail é obrigatório."),
  password: z
    .string()
    .min(4, "A senha deve possuir no minímo 4 caracteres."),
});

export type LoginSchema = z.infer<typeof loginSchema>;