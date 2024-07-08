import { Button, Header, Text } from "../../ui";
import { type ProductDto } from "../../types";
import { useAppDispatch } from "../../hooks/redux";
import { add } from "./basketSlice";
import { MouseEventHandler, useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

type Props = {
  product: ProductDto;
};

export const ProductDetails = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const [showFull, setShowFull] = useState(false);
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setShowFull(!showFull);
  };
  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        <Header className="text-4xl font-light my-6">
          {product.fields.name} ({product.fields.price.toString()} zł)
        </Header>
        <Button
          label="+"
          className="ml-2 py-1 px-2"
          onClick={() => dispatch(add(product))}
        />
      </div>

      <div className="flex justify-center flex-row">
        <Text
          className={`max-w-prose text-gray-700 ${!showFull && "line-clamp-5"}`}
        >
          {product.fields.description}
        </Text>
        <Button
          label={showFull ? "Less" : "More"}
          onClick={handleClick}
          className="bg-slate-200 text-slate-800 hover:bg-slate-400 p-1 hover:text-white h-fit dark:bg-slate-500 dark:text-slate-300 dark:hover:bg-orange-300 self-end"
        />
      </div>
    </div>
  );
};
