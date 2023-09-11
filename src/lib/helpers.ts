import { z } from 'zod';

export const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

export const emailSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().regex(phoneRegex),
  inquery: z.string().min(1),
  message: z.string().min(1),
});

export type EmailModel = z.infer<typeof emailSchema>;
