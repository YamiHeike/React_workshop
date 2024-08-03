import { type ComponentProps } from "react";
import { cn } from "../../utils/cn";

type Props = {
  children: string | string[];
  clasName?: string | string[];
} & ComponentProps<"h1">;

export const Header = ({ children, className = "", ...rest }: Props) => {
  return (
    <h1 {...rest} className={cn("dark:text-slate-300", className)}>
      {children}
    </h1>
  );
};
