import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldsSchema, type CreateProductDto } from "../../types";
import { Button, Input } from "../../ui";
import { type ComponentProps } from "react";

type Props = {
  submitter: (data: CreateProductDto) => void;
} & ComponentProps<"form">;

export const CreateProductForm = ({ submitter, ...rest }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductDto>({
    resolver: zodResolver(FieldsSchema),
  });

  const handleCreateProductForm: SubmitHandler<CreateProductDto> = (data) => {
    submitter(data);
  };

  return (
    <form onSubmit={handleSubmit(handleCreateProductForm)} {...rest}>
      <Input label="Name" {...register("name")} error={errors.name} />
      <Input
        label="Description"
        {...register("description")}
        error={errors.description}
      />
      <Input
        label="Price"
        type="number"
        {...register("price", { valueAsNumber: true })}
        error={errors.price}
      />
      <Input label="Genre" {...register("genre")} error={errors.genre} />
      <Button label="Add" type="submit" />
    </form>
  );
};
