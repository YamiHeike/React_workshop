import { mergeOptions } from "@apollo/client";
import { ComponentProps } from "react";
import { v4 as uuid } from "uuid";

type Props = {
  label: string;
  options: string[];
} & ComponentProps<"select">;

export const Select = ({ options, label, ...rest }: Props) => {
  const id = uuid();
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id} {...rest}>
        {options.map((opt) => (
          <option value={opt}>{opt}</option>
        ))}
      </select>
    </>
  );
};
