import { useEffect, useState } from "react";
import { ProductDetails, ProductsList } from "../features";
import { type ProductDto } from "../types";
import { Text } from "../ui";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../services/products";
import { useApi } from "../hooks/useApi";

/*const products: Product[] = [
  { id: 1, name: "Laptop", price: 3000 },
  { id: 2, name: "Keyboard", price: 150 },
  { id: 3, name: "Mouse", price: 70 },x
];*/

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useApi<ProductDto>(() =>
    fetchProduct(id)
  );

  return (
    <>
      {isLoading && <p className="dark:text-white">Loading...</p>}
      {isError && <p>Oh no! An Error has occurred!</p>}
      {data && <ProductDetails product={data} />}
    </>
  );
};
