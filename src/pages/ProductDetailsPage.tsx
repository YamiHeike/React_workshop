import { ProductDetails } from "../features";
import { type ProductDto } from "../types";

import { useParams } from "react-router-dom";
import { fetchProduct } from "../services/products";
import { useApi } from "../hooks/useApi";

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
