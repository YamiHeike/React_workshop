import { useEffect, useState } from "react";
import { ProductDetails, ProductsList } from "../features";
import { type ProductDto } from "../types";
import { Text } from "../ui";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../services/products";

/*const products: Product[] = [
  { id: 1, name: "Laptop", price: 3000 },
  { id: 2, name: "Keyboard", price: 150 },
  { id: 3, name: "Mouse", price: 70 },x
];*/

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<ProductDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (id) {
      fetchProduct(id)
        .then((responseData) => {
          setData(responseData);
          setIsLoading(false);
        })
        .catch(() => {
          setIsError(true);
        });
    }
  }, [id]);

  return (
    <>
      <Text>Products</Text>
      {isLoading && <p className="dark:text-white">Loading...</p>}
      {isError && <p>Oh no :( An Error has occurred!</p>}
      {data && <ProductDetails product={data} />}
    </>
  );
};
