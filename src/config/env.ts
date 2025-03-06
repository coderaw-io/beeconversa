import { z } from "zod"

const envSchema = z.object({
  NEXT_PUBLIC_TENANT: z.string(),
  NEXT_PUBLIC_AUTH_API: z.string().url(),
  NEXT_PUBLIC_UPLOAD_API: z.string().url(),
  NEXT_PUBLIC_CUSTOMER_API: z.string().url(),
  NEXT_PUBLIC_META_API: z.string().url(),
})

export const env = envSchema.parse({
  NEXT_PUBLIC_TENANT: process.env.NEXT_PUBLIC_TENANT,
  NEXT_PUBLIC_AUTH_API: process.env.NEXT_PUBLIC_AUTH_API,
  NEXT_PUBLIC_UPLOAD_API: process.env.NEXT_PUBLIC_UPLOAD_API,
  NEXT_PUBLIC_CUSTOMER_API: process.env.NEXT_PUBLIC_CUSTOMER_API,
  NEXT_PUBLIC_META_API: process.env.NEXT_PUBLIC_META_API,
})