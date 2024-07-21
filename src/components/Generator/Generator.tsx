import { MouseEventHandler, useState, type ChangeEventHandler } from "react";
import { Select, Text, Button, Header, Input } from "../../ui";
import { useForm, type SubmitHandler } from "react-hook-form";
import { cn } from "../../utils/cn";

type Inputs = {
  label: string;
  classes: string;
};

export const Generator = () => {
  const componentMapping = {
    Button: <Button onClick={() => alert("Well, hello there!")} />,
    Text: (
      <Text className="font-serif text-xl bg-green-700 py-2 my-2 rounded text-white hover:text-black hover:bg-green-200">
        You did it!
      </Text>
    ),
    Header: (
      <Header className="text-5xl font-thin my-2">React is wonderful!</Header>
    ),
    Input: (
      <Input label="Tell me what you think: " className="bg-blue-100"></Input>
    ),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [selected, setSelected] = useState(Object.keys(componentMapping)[0]);
  const [textProps, setTextProps] = useState({ label: "", classes: "" });

  const myItem = Object.entries(componentMapping).find(
    (itm) => itm[0] === selected
  );

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (evt) => {
    setSelected(evt.target.value);
  };

  const getTextProps: SubmitHandler<Inputs> = (data) => {
    setTextProps({
      label: data.label,
      classes: data.classes,
    });
  };

  const reset: MouseEventHandler<HTMLButtonElement> = () => {
    setTextProps({ label: "", classes: "" });
  };

  const { label, ...other } = textProps;

  return (
    <>
      <div className="flex flex-col items-center">
        <Select
          label={"Choose a component to display:"}
          options={Object.keys(componentMapping)}
          onChange={handleChange}
          className="mx-1 my-2"
        />
        {myItem && myItem[0] !== "Text" ? (
          myItem[1]
        ) : textProps.label ? (
          <>
            <Text className={cn("my-2", textProps.classes)}>
              {textProps.label}
            </Text>
            <Button onClick={reset} label="Reset Text" />
          </>
        ) : (
          <>
            <form
              onSubmit={handleSubmit(getTextProps)}
              className="flex items-center flex-col"
            >
              <label htmlFor="label" className="dark:text-slate-300">
                Enter the text to display:
              </label>
              <input
                className="border-2 border-blue-400 my-2"
                id="label"
                {...register("label", { required: true })}
              />
              {errors.label && (
                <p className="bg-red-600 border-2 border-red-500 py-2 px-4 rounded text-white font-bold">
                  This field is required
                </p>
              )}
              <label htmlFor="classes" className="dark:text-slate-300">
                CSS classes for your text:
              </label>
              <input
                id="classes"
                {...register("classes")}
                className="border-2 border-blue-400 my-2"
              />
              <input
                type="submit"
                value="Generate text"
                className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-200 hover:text-black cursor-pointer"
              />
            </form>
          </>
        )}
      </div>
    </>
  );
};
