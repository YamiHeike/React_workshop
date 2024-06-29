import { selectCount } from "./basketSlice";
import { useAppSelector } from "../../hooks/redux";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export const Basket = () => {
  //alternatively: const count = useAppSelector((state) => state.basket.products.length);
  const count = useAppSelector(selectCount);

  return (
    <div className="flex items-center">
      <ShoppingCartIcon className="w-4 h-4 mr-1 dark:text-slate-300" />
      <span className="dark:text-slate-300"> {count}</span>
    </div>
  );
};
