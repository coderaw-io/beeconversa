import { z } from "zod";

export const filterSchema = z.object({
  fileName: z.string(),
  initDate: z.date(),
  endDate: z.date(),
});