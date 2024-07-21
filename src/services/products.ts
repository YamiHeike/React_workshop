import { CreateProductDto, type ProductDto } from "../types";

export type AirtableListResponse<T> = {
  records: T;
};

const API_BASE_URL = "https://api.airtable.com/v0/appcwnUieOOxd1RMR";
const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
  "Content-type": "application/json",
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

export const createProduct = (data: CreateProductDto): Promise<void> => {
  //api.post('/shelf', data) - axios
  return fetch(`${API_BASE_URL}/shelf`, {
    headers,
    method: "POST",
    //Airtable-specific format
    body: JSON.stringify({ records: [{ fields: data }] }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("Invalid response");
  });
};

export const editProduct = (
  data: ProductDto,
  id: ProductDto["id"] | undefined
): Promise<void> => {
  console.log("submitting data: ", data);
  console.log("productID: ", id);
  if (!id) {
    return Promise.reject(new Error("Product ID is required"));
  }
  return fetch(`${API_BASE_URL}/shelf/${id}`, {
    headers,
    method: "PUT",
    body: JSON.stringify({ fields: data.fields }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Invalid response");
    }
  });
};
