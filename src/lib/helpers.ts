import { z } from 'zod';

export const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

export const emailSchema = z.object({
  name: z.string().min(1, 'Name is required').max(50),
  access_key: z.string().optional(),
  from_name: z.string().optional(),
  email: z.string().email(),
  phone: z.string().regex(phoneRegex),
  subject: z.string().min(1, 'Subject is required').max(150),
  message: z.string().min(1, 'Message is required').max(300),
});

export type EmailModel = z.infer<typeof emailSchema>;
