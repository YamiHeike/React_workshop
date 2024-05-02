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
        "mx-2 my-3 px-4 py-3 text-white dark:text-white bg-blue-600 dark:hover:bg-green-200 dark:bg-green-600 dark:hover:text-black text-sm border-blue-200 rounded-md hover:bg-blue-500 shadow-xl disabled:bg-blue-300 disabled:cursor-not-allowed",
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
};
