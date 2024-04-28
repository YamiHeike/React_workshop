import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { Button, Input, Text } from "../../ui";

type Data = {
  firstName: string;
  lastName: string;
  hobbies: { name: string }[];
};

export const Dynamic = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Data>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "hobbies",
  });

  const onSubmit: SubmitHandler<Data> = (data) => {
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
        />
        <Input label="LastName" {...register("lastName", { required: true })} />

        <div className="border-2 border-slate-300 mt-8 rounded px-2 py-2 bg-white shadow-md">
          <Text>Hobbies</Text>
          {fields.map((field, idx) => (
            <div key={field.id} className="flex items-center gap-2">
              <Input
                label=""
                placeholder="Enter your hobby"
                {...register(`hobbies.${idx}.name`, { required: true })}
              />
              <Button
                label="Delete"
                onClick={() => remove(idx)}
                className="py-1 px-2 bg-amber-500 text-white"
              />
              {errors.hobbies && errors.hobbies[idx] && (
                <Text>Enter the hobby</Text>
              )}
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
