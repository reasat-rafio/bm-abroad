import { z } from 'zod';

export const formatDate = (inputDate: string): string => {
  const months: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const dateObj: Date = new Date(inputDate);
  const day: number = dateObj.getDate();
  const month: string = months[dateObj.getMonth()];
  const year: number = dateObj.getFullYear();

  const dayWithOrdinal: string = getDayWithOrdinalSuffix(day);

  return `${dayWithOrdinal} ${month} ${year}`;
};

const getDayWithOrdinalSuffix = (day: number): string => {
  if (day >= 11 && day <= 13) {
    return `${day}th`;
  }
  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
};

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
