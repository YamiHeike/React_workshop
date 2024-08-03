import { ProductsList } from "../features";

import { Text } from "../ui";
import { fetchProducts } from "../services/products";

import { Link } from "react-router-dom";
import { routes } from "../routes";
import { useQuery } from "@tanstack/react-query";

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
