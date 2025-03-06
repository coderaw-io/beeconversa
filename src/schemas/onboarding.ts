import { z } from "zod";

export const onboardingSchema = z.object({
  phoneNumber: z.string().min(12, "O número de telefone informado é inválido."),
  verifiedName: z
    .string()
    .min(6, "O nome verificado deve possuir no mínimo 6 caracteres.")
    .refine(
      (value) => {
        const words = value.trim().split(/\s+/);

        if (words.length < 2 || !value.includes(" ")) return false;

        const pascalCaseRegex = /^[A-Z][a-z]*$/;

        return words.every((word) => pascalCaseRegex.test(word));
      },
      {
        message:
          "O nome deve conter Nome e Sobrenome (Exemplo: John Doe).",
      }
    ),
  code: z.number(),
  pin: z.number(),
});

export type OnboardingSchema = z.infer<typeof onboardingSchema>;