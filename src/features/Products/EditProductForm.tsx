import { SubmitHandler, useForm } from "react-hook-form";
import {
  CreateProductDto,
  CreateProductSchema,
  type ProductDto,
} from "../../types";
import { ComponentProps } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Text, Input, Button } from "../../ui";
import { TextArea } from "../../ui";

//I'll try to omit this argument by editing only the submitter in CreateProductForm, PUT instead of POST
//We'll see!

type Props = {
  submitter: (data: ProductDto) => void;
  data: ProductDto; //This needs to be adjusted
} & ComponentProps<"form">;

export const EditProductForm = ({ submitter, data, ...rest }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductDto>({
    resolver: zodResolver(CreateProductSchema),
  });
  const handleForm: SubmitHandler<CreateProductDto> = () => {};

  return (
    <>
      <Text className="text-4xl mb-6">Edit Product Pane</Text>
      <div>
        <form {...rest} onSubmit={handleSubmit(handleForm)}>
          <div className="my-2">
            <Input
              label="Name"
              placeholder={data.fields.name}
              className="w-3/12"
            />
          </div>
          <div className="my-2">
            <Input
              label="Price"
              placeholder={data.fields.price.toString()}
              className="w-3/12"
            ></Input>
          </div>
          <div className="my-2">
            <Input
              label="Genre"
              placeholder={data.fields.genre}
              className="w-3/12"
            />
          </div>
          <div>
            <TextArea
              label="Description:"
              placeholder={data.fields.description}
              rows={4}
              cols={50}
              className="my-3"
            />
          </div>
          <Button label="Submit" type="submit" />
        </form>
      </div>
    </>
  );
};
