import { ComponentProps, useId } from "react";
import { cn } from "../../utils/cn";

type Props = {
  label: string;
  className?: string;
} & ComponentProps<"textarea">;

export const TextArea = ({ label, className = "", ...rest }: Props) => {
  const id = useId();
  return (
    <div className="flex justify-center items-center flex-col">
      <label htmlFor={id} className="self-center">
        {label}
      </label>
      <textarea
        id={id}
        className={cn("border-2 border-slate-500", className)}
        {...rest}
      ></textarea>
    </div>
  );
};
