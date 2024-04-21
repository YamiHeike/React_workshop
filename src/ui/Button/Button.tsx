import { MouseEventHandler, ComponentProps } from "react";
import { cn } from "../../utils/cn";

type Props = {
  label?: string;

  onClick: MouseEventHandler<HTMLButtonElement>;
} & ComponentProps<"button">;

export const Button = ({
  label = "Click me!",
  className = "",
  onClick,
  ...rest
}: Props) => {
  return (
    <button
      className={cn(
        "mx-2 my-3 px-4 py-3 text-white bg-blue-600 text-sm border-blue-200 rounded-md hover:bg-blue-500 shadow-xl",
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
};
