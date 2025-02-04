import { z } from "zod";

export const campaignFromCsvSchema = z.object({
  name: z
    .string()
    .min(4, "O campo nome da campanha é obrigatório e deve ser maior que 4 caracteres."),
  fileIds: z.array(
    z.string().uuid()
  ),
});

export const campaignFromCustomerSchema = z.object({
  name: z
    .string()
    .min(4, "O campo nome da campanha é obrigatório e deve ser maior que 4 caracteres."),
  customerIds: z.array(
    z.string().uuid()
  ),
});

export type CampaignFromCsvSchema = z.infer<typeof campaignFromCsvSchema>;
export type CampaignFromCustomerSchema = z.infer<typeof campaignFromCustomerSchema>;