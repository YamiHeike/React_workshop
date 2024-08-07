import { useEffect, useState } from "react";
import { ProductsList } from "../features";
import { type ProductDto } from "../types";
import { Text } from "../ui";
import { type AirtableListResponse, fetchProducts } from "../services/products";
import { useApi } from "../hooks/useApi";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { useQuery } from "@tanstack/react-query";

/*const products: Product[] = [
  { id: 1, name: "Laptop", price: 3000 },
  { id: 2, name: "Keyboard", price: 150 },
  { id: 3, name: "Mouse", price: 70 },x
];*/

export const ProductsPage = () => {
  //const [data, setData] = useState<ProductDto[]>([]);
  //const [isLoading, setIsLoading] = useState(true);
  //const [isError, setIsError] = useState(false);

  //const { data, isLoading, isError } =
  //useApi<AirtableListResponse<ProductDto[]>>(fetchProducts);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  /*const loadData = async () => {
    try {
      const response = await fetchProducts();
      setData(response.records);
      setIsLoading(false);
    } catch {
      setIsError(true);
    }
  };
  useEffect(() => {
    //fetchProducts().then((data) => setProducts(data.records));
    
    loadData();
  }, []);*/

  return (
    <>
      <Text>Products</Text>
      <div>
        <Link
          to={routes.CREATE_PRODUCT.path}
          className="dark:text-red-600 dark:hover:text-red-200 text-blue-800 hover:text-blue-600"
        >
          Create Product
        </Link>
      </div>
      {data && <ProductsList products={data.records} />}
      {isLoading && <p className="dark:text-slate-300">Loading...</p>}
      {isError && <p>Oh no! An Error has occurred</p>}
    </>
  );
};
