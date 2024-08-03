import { type ComponentPropsWithRef, forwardRef, useId, type Ref } from "react";
import { type FieldError } from "react-hook-form";

type Props = {
  label: string;
  error?: FieldError;
} & ComponentPropsWithRef<"input">;

export const Input = forwardRef(
  ({ label, error, ...rest }: Props, ref: Ref<HTMLInputElement>) => {
    const id = useId();
    return (
      <div className="my-2">
        <label htmlFor={id} className="dark:text-slate-300 mx-2">
          {label}
        </label>
        <input
          ref={ref}
          className="border-2 border-blue-800 rounded"
          id={id}
          {...rest}
        />
        {error && <p className="text-red-500">{error.message}</p>}
      </div>
    );
  }
);
