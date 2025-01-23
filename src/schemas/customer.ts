import { z } from "zod";

export const addCustomerSchema = z.object({
  name: z
    .string()
    .min(1, "O campo nome é obrigatório."),
  emails: z
    .string().email("Endereço de e-mail inválido.")
    .min(1, "O campo e-mail é obrigatório."),
  phones: z
    .string()
    .min(15, "O campo telefone é obrigatório."),
  cpf: z
    .string()
    .min(14, "Informe um CPF válido.")
});

export type AddCustomerSchema = z.infer<typeof addCustomerSchema>;