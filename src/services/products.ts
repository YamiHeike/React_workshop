import { type ProductDto } from "../types";

export type AirtableListResponse<T> = {
  records: T;
};

const API_BASE_URL = "https://api.airtable.com/v0/appcwnUieOOxd1RMR";
const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
};

export const fetchProducts = (): Promise<
  AirtableListResponse<ProductDto[]>
> => {
  return fetch(`${API_BASE_URL}/shelf`, {
    headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("Invalid response");
  });
};

export const fetchProduct = (
  id: ProductDto["id"] | undefined
): Promise<ProductDto> => {
  if (!id) {
    throw new Error("Invalid id");
  }
  return fetch(`${API_BASE_URL}/shelf/${id}`, {
    headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("Invalid response");
  });
};
