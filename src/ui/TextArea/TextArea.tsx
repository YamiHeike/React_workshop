import { type ComponentPropsWithRef, Ref, forwardRef, useId } from "react";
import { cn } from "../../utils/cn";
import { FieldError } from "react-hook-form";

type Props = {
  label: string;
  className?: string;
  error?: FieldError;
} & ComponentPropsWithRef<"textarea">;

export const TextArea = forwardRef(
  (
    { label, error, className = "", ...rest }: Props,
    ref: Ref<HTMLTextAreaElement>
  ) => {
    const id = useId();
    return (
      <div className="flex justify-center items-center flex-col">
        <label htmlFor={id} className="self-center dark:text-slate-300">
          {label}
        </label>
        <textarea
          id={id}
          className={cn("border-2 border-slate-500", className)}
          ref={ref}
          {...rest}
        ></textarea>
        {error && <p className="text-red-700">{error.message}</p>}
      </div>
    );
  }
);
