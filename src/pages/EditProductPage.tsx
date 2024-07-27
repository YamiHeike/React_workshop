import { useParams } from "react-router-dom";
import { Text } from "../ui";
import { useApi } from "../hooks/useApi";
import { type ProductDto } from "../types";
import { editProduct, fetchProduct } from "../services/products";
import { EditProductForm } from "../features/Products/EditProductForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const EditProductPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useApi<ProductDto>(() =>
    fetchProduct(id)
  );

  const handleSubmit = async (formData: ProductDto) => {
    try {
      console.log("Submitting to API: ", formData);
      await editProduct(formData, id);
      toast.success("The book was successfully updated!", {
        position: "bottom-right",
      });
    } catch (error) {
      toast.error("Oh no! Your changes weren't saved", {
        position: "bottom-right",
      });
    }
  };

  return (
    <>
      {isLoading && <Text>Loading...</Text>}
      {data && <EditProductForm submitter={handleSubmit} data={data} />}
      {isError && <Text>Unable to fetch chosen product</Text>}
      <ToastContainer />
    </>
  );
};
