import { Button, Text } from "../../ui";
import { type ProductDto } from "../../types";
import { useAppDispatch } from "../../hooks/redux";
import { add } from "./basketSlice";
import { Link } from "react-router-dom";

type Props = {
  product: ProductDto;
};

export const ProductDetails = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <ul>
        <li
          key={product.id}
          className="dark:text-slate-300 flex items-center my-2"
        >
          <p>
            {product.fields.name} ({product.fields.price.toString()} zł)
          </p>

          <Button
            label="+"
            className="ml-2"
            onClick={() => dispatch(add(product))}
          />
        </li>
      </ul>
    </div>
  );
};
