import { type MouseEventHandler, useState } from "react";
import { Input, Text, Button } from "../../ui";
import { useForm, type SubmitHandler } from "react-hook-form";

type Data = {
  firstName: string;
  lastName: string;
  birthDate: string;
  hobby: string;
};

export const FormWizard = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>();

  const inputs = [
    [
      <>
        <Input
          className="flex flex-col items-center"
          label="First Name: "
          {...register("firstName", { required: true })}
        />
        {errors.firstName && (
          <p className="my-2 mt-3 rounded  bg-red-500 text-white">
            First Name is required
          </p>
        )}
      </>,
      <>
        <Input
          className="flex flex-col items-center"
          label="Last Name: "
          {...register("lastName", { required: true })}
        />
        {errors.lastName && (
          <p className="my-2 mt-3 rounded  bg-red-500 text-white">
            Last Name is Required
          </p>
        )}
      </>,
    ],
    [
      <>
        <Input
          label="Date of Birth: "
          {...register("birthDate", { required: true })}
          className="flex flex-col items-center"
        />
        {errors.birthDate && (
          <p className="my-2 mt-3 rounded  bg-red-500 text-white">
            Birth Date is Required
          </p>
        )}
      </>,

      <Input
        label="Hobby: "
        {...register("hobby")}
        className="flex flex-col items-center"
      />,
    ],
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const watchedFields = watch(["firstName", "lastName", "birthDate", "hobby"]);
  //console.log({ watchedFields });

  let readyToSubmit = false;

  const goToPrevPage: MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentStep((prev) => prev - 1);
    readyToSubmit = false;
  };

  const goToNextPage: MouseEventHandler<HTMLButtonElement> = () => {
    if (currentStep < inputs.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      readyToSubmit = true;
    }
  };

  const handleFormSubmit: SubmitHandler<Data> = (data) => {
    if (readyToSubmit) {
      console.log(
        `First name: ${data.firstName}\nLast name: ${data.lastName}\nDate of Birth: ${data.birthDate}\nHobby: ${data.hobby}`
      );
    }
  };

  return (
    <>
      <form
        action=""
        className="flex flex-col items-center border-2 border-slate-300 rounded py-6 px-5 mx-auto w-fit bg-slate-100 shadow-lg"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <Text className="my-2 text-4xl ">REGISTER</Text>
        {inputs[currentStep].map((ipt, idx) => (
          <div key={idx}>{ipt}</div>
        ))}
        <div className="mt-2">
          <Button
            onClick={goToPrevPage}
            label="Previous Page"
            disabled={currentStep === 0 && true}
          />
          <Button
            type={currentStep === inputs.length - 1 ? "submit" : "button"}
            onClick={goToNextPage}
            label={currentStep > 0 ? "Submit" : "Next Page"}
          />
        </div>
      </form>
    </>
  );
};
