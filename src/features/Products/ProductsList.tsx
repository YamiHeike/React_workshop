import { Button, Text } from "../../ui";
import { type Product } from "../../types";
import { useAppDispatch } from "../../hooks/redux";
import { add } from "./basketSlice";

const products: Product[] = [
  { id: 1, name: "Laptop", price: 3000 },
  { id: 2, name: "Keyboard", price: 150 },
  { id: 3, name: "Mouse", price: 70 },
];

export const ProductsList = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Text className="text-xl text-left mt-5">Products</Text>
      {
        <ul>
          {products.map((product) => (
            <li
              key={product.id}
              className="dark:text-slate-300 flex items-center my-2"
            >
              <Text>
                {product.name} ({product.price.toString()} zł)
              </Text>
              <Button
                label="+"
                className="ml-2"
                onClick={() => dispatch(add(product))}
              />
            </li>
          ))}
        </ul>
      }
    </div>
  );
};