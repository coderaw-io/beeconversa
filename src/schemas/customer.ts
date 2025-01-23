import { z } from "zod";

export const addCustomerSchema = z.object({
  name: z
    .string()
    .min(1, "O campo nome é obrigatório."),
  emails: z
    .array(
      z.string().email("Endereço de e-mail inválido.")
    )
    .min(1, "O campo e-mail é obrigatório."),
  phones: z
    .array(
      z.string().regex(/^\d+$/, "O número de telefone deve conter apenas números.")
    )
    .min(15, "O campo telefone é obrigatório."),
  cpf: z
    .string()
    .min(14, "Informe um CPF válido.")
});

export type AddCustomerSchema = z.infer<typeof addCustomerSchema>;