import { useNavigate } from "react-router-dom";
import { CreateProductForm } from "../features/Products/CreateProductForm";
import { createProduct } from "../services/products";
import { type CreateProductDto } from "../types";
import { Header } from "../ui";
import { routes } from "../routes";

export const CreateProductPage = () => {
  const navigate = useNavigate();
  const handleSubmit = async (data: CreateProductDto) => {
    // console.log({ data });
    await createProduct(data);
    navigate(routes.PRODUCTS.path);
  };
  return (
    <>
      <Header className="text-5xl">Create Product</Header>
      {/*<h4 className="dark:text-slate-300">{airtableAPIToken}</h4>*/}
      <CreateProductForm submitter={handleSubmit} />
    </>
  );
};
