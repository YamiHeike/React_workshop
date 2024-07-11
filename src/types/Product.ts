import { z } from "zod";

export type Product = {
  id: number;
  name: string;
  price: number;
};

export type ProductDto = {
  id: string;
  fields: {
    name: string;
    price: number;
    genre: string;
    description: string;
  };
};

export const CreateProductSchema = z.object({
  name: z.string().min(1, { message: "The title is required" }),
  price: z
    .number({
      invalid_type_error: "Enter a number",
      required_error: "Price is required",
    })
    .min(1, { message: "Invalid price" }),
  genre: z.string().min(3, { message: "Invalid genre" }),
  description: z.string(),
});

export type CreateProductDto = z.infer<typeof CreateProductSchema>;
