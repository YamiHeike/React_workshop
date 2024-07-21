import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductDto, ProductDtoSchema } from "../../types";
import { Button, Header, Input, TextArea } from "../../ui";
import React, { ComponentProps } from "react";

type Props = {
  data: ProductDto;
  submitter: (data: ProductDto) => void;
} & ComponentProps<"form">;

export const EditProductForm = ({ data, submitter, ...rest }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductDto>({
    resolver: zodResolver(ProductDtoSchema),
    defaultValues: {
      id: data.id,
      fields: {
        name: data.fields.name,
        price: data.fields.price,
        genre: data.fields.genre,
        description: data.fields.description,
      },
    },
  });

  const handleEditProductForm: SubmitHandler<ProductDto> = (data) => {
    submitter(data);
    console.log("Success");
  };
  return (
    <form onSubmit={handleSubmit(handleEditProductForm)} {...rest}>
      <Header className="text-3xl">{`${data.fields.name} - Edit Product`}</Header>
      <div className="flex flex-col">
        <Input
          label="Name"
          {...register("fields.name")}
          error={errors.fields?.name}
          placeholder={data.fields.name}
        />
        <Input
          label="Price"
          {...register("fields.price")}
          error={errors.fields?.price}
          placeholder={data.fields.price.toString()}
        />
        <Input
          label="Genre"
          {...register("fields.genre")}
          error={errors.fields?.genre}
          placeholder={data.fields.genre}
        />
      </div>
      <TextArea
        label="Description"
        {...register("fields.description")}
        rows={4}
        cols={50}
        placeholder={data.fields.description}
      />
      <Button type="submit" label="Save Changes" className="mx-auto my-3" />
    </form>
  );
};
