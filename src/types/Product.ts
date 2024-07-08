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

export type CreateProductDto = z.infer<typeof CreateProductSchema>;

export const CreateProductSchema = z.object({
  name: z.string().min(1, { message: "The title is required" }),
  price: z.number().min(1, { message: "Invalid price" }),
  genre: z.string().min(3, { message: "Invalid genre" }),
  description: z.string(),
});
