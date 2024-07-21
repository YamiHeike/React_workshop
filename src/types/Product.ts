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

export const FieldsSchema = z.object({
  name: z.string().min(1, { message: "The title is required" }),
  price: z
    .number({
      invalid_type_error: "Enter a number",
      required_error: "Price is required",
    })
    .positive({ message: "Price must be a positive number " })
    .min(0.01, { message: "Invalid price" }),
  genre: z.string().min(3, { message: "Invalid genre" }),
  description: z.string(),
});

export const ProductDtoSchema = z.object({
  id: z.string(),
  fields: FieldsSchema,
});

export type CreateProductDto = z.infer<typeof FieldsSchema>;
