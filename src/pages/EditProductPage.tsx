import { useNavigate, useParams } from "react-router-dom";
import { Text } from "../ui";
import { useApi } from "../hooks/useApi";
import { CreateProductDto, ProductDto } from "../types";
import { editProduct, fetchProduct } from "../services/products";
import { CreateProductForm } from "../features/Products/CreateProductForm";
import { EditProductForm } from "../features/Products/EditProductForm";

export const EditProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError } = useApi<ProductDto>(() =>
    fetchProduct(id)
  );

  const handleSubmit = async (data: ProductDto) => {
    await editProduct(data, id);
    //navigate(routes.PRODUCTS.path);
  };

  return (
    <>
      {isLoading && <Text>Loading...</Text>}
      {data && <EditProductForm submitter={handleSubmit} data={data} />}
      {isError && <Text>Unable to fetch chosen product</Text>}
    </>
  );
};
