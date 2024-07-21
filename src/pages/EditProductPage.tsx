import { useNavigate, useParams } from "react-router-dom";
import { Text } from "../ui";
import { useApi } from "../hooks/useApi";
import { ProductDto } from "../types";
import { editProduct, fetchProduct } from "../services/products";
import { EditProductForm } from "../features/Products/EditProductForm";

export const EditProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError } = useApi<ProductDto>(() =>
    fetchProduct(id)
  );

  let pdto: ProductDto;

  const handleSubmit = async (formData: ProductDto) => {
    console.log("Submitting to API: ", formData);
    await editProduct(formData, id);
    navigate("/products");
  };

  return (
    <>
      {isLoading && <Text>Loading...</Text>}
      {data && <EditProductForm submitter={handleSubmit} data={data} />}
      {isError && <Text>Unable to fetch chosen product</Text>}
    </>
  );
};
