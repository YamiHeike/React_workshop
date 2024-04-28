import { ComponentProps } from "react";

type Props = {
  children?: string;
} & ComponentProps<"p">;

export const Text = ({ children = "Hello Amigos!", ...rest }: Props) => {
  return <p {...rest}>{children}</p>;
};
