type Props = {
  children?: string;
};

export const Text = ({ children = "Click me" }: Props) => {
  return <p>{children}</p>;
};
