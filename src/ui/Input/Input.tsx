import { type ComponentPropsWithRef, forwardRef, useId, type Ref } from "react";
import { FieldError } from "react-hook-form";
import { cn } from "../../utils/cn";
import { Text } from "../Text";

type Props = {
  label: string;
  error?: FieldError;
  errorClasses?: string | string[];
} & ComponentPropsWithRef<"input">;

export const Input = forwardRef(
  (
    { label, error, errorClasses, ...rest }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const id = useId();
    return (
      <>
        <div>
          <label htmlFor={id}>{label}</label>
          <input
            ref={ref}
            className="border-2 border-blue-800 rounded"
            id={id}
            {...rest}
          />
          {error && (
            <Text className={cn("text-red-600", errorClasses)}>
              {error.message}
            </Text>
          )}
        </div>
      </>
    );
  }
);
