import { ComponentProps } from "react";
import { cn } from "../../utils/cn";

type Props = {
  children?: string | string[] | number;
  className?: string;
} & ComponentProps<"p">;

export const Text = ({
  children = "Hello Amigos!",
  className = "",
  ...rest
}: Props) => {
  return (
    <p className={cn("dark:text-slate-200", className)} {...rest}>
      {children}
    </p>
  );
};
