import { z } from "zod";

export const ValidationSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name should be at least 2 characters long")
    .max(20, "First name should be maximum 20 characters long"),
  lastName: z
    .string()
    .min(2, "Last name should be at least 2 characters long")
    .max(30, "Last name should be maximum 30 characters long"),
  hobbies: z
    .array(
      z.object({
        name: z.string().min(2, "Enter a hobby"),
      })
    )
    .min(1, "At least one hobby is required")
    .max(20, "Too many hobbies"),
});

export type ValidationSchemaType = z.infer<typeof ValidationSchema>;
