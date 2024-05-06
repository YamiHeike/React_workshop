import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { Button, Input, Text } from "../../ui";
import { type ValidationSchemaType, ValidationSchema } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";

/*type formData = {
  firstName: string;
  lastName: string;
  hobbies: { name: string }[];
};*/

export const Dynamic = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(ValidationSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "hobbies",
  });

  const onSubmit: SubmitHandler<ValidationSchemaType> = (data) => {
    console.log("Form data:", data);
  };

  return (
    <div className="flex">
      <form
        action=""
        className="flex flex-col w-fit  mx-auto my-2 border-slate-200 border-2 py-2 px-8 rounded shadow-md bg-zinc-100"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="First name"
          {...register("firstName", { required: true })}
          error={errors.firstName}
        />
        <Input
          label="LastName"
          {...register("lastName", { required: true })}
          error={errors.lastName}
        />
        <div className="border-2 border-slate-300 mt-8 rounded px-2 py-2 bg-white shadow-md">
          <Text>Hobbies</Text>
          {fields.map((field, idx) => (
            <div key={field.id} className="flex items-center gap-2">
              <Input
                label=""
                placeholder="Enter your hobby"
                {...register(`hobbies.${idx}.name`, { required: true })}
                error={errors.hobbies?.[idx]?.name}
              />
              <Button
                label="Delete"
                onClick={() => remove(idx)}
                className="py-1 px-2 bg-amber-500 text-white"
              />
              {/*errors.hobbies && errors.hobbies[idx] && (
                <Text className="text-red-600">
                  {errors.hobbies[idx]?.name?.message}
                </Text>
              )*/}
            </div>
          ))}
        </div>
        <div>
          <Button
            label="Add Hobby"
            onClick={(evt) => {
              evt.preventDefault();
              append({ name: "" });
            }}
          />
          <Button
            label="Save Data"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </form>
    </div>
  );
};
