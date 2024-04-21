import { ComponentProps } from "react";

type Props = {
  children: string;
} & ComponentProps<"h1">;

export const Header = ({ children, ...rest }: Props) => {
  return <h1 {...rest}>{children}</h1>;
};
