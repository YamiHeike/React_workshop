import { Button, Text } from "../../ui";
import { type ProductDto } from "../../types";
import { useAppDispatch } from "../../hooks/redux";
import { add } from "./basketSlice";
import { Link } from "react-router-dom";

type Props = {
  products: ProductDto[];
};

export const ProductsList = ({ products }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      {
        <ul>
          {products.map((product) => (
            <li
              key={product.id}
              className="dark:text-slate-300 flex items-center my-2"
            >
              <Button
                label="+"
                className="ml-2 px-3 py-1"
                onClick={() => dispatch(add(product))}
              />
              <Link
                to={`/products/${product.id}`}
                className="dark:hover:text-green-200 hover:text-blue-500"
              >
                {product.fields.name} ({product.fields.price.toString()} zł)
              </Link>
              <Link to={`/products/edit/${product.id}`}>
                <Button
                  label="Edit"
                  className="px-2 py-1 bg-orange-400 shadow-none cursor-pointer dark:bg-yellow-300 dark:text-slate-900"
                ></Button>
              </Link>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};
