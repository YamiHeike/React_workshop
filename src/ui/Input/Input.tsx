import { type ComponentPropsWithRef, forwardRef, useId, type Ref } from "react";

type Props = {
  label: string;
} & ComponentPropsWithRef<"input">;

export const Input = forwardRef(
  ({ label, ...rest }: Props, ref: Ref<HTMLInputElement>) => {
    const id = useId();
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input
          ref={ref}
          className="border-2 border-blue-800 rounded"
          id={id}
          {...rest}
        />
      </>
    );
  }
);
