import { useCustomerContext, Customers } from "../Customer";
import { FaApple, FaReact } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaMeta } from "react-icons/fa6";

export const Logo = () => {
  const { customer, changeCustomer } = useCustomerContext();
  let logo;

  switch (customer) {
    case Customers.APPLE:
      logo = <FaApple className="w-10 h-10 dark:text-slate-100" />;
      break;
    case Customers.GOOGLE:
      logo = <FcGoogle className="w-10 h-10" />;
      break;
    case Customers.META:
      logo = <FaMeta className="w-10 h-10 text-blue-700 dark:text-slate-300" />;
      break;
    default:
      logo = <FaReact className="w-10 h-10 text-blue-700 dark:text-red-600" />;
  }

  return <div className="mr-2">{logo}</div>;
};
