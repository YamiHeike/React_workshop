import { NavLink } from "react-router-dom";
import { routes } from "../../routes";
import { Basket } from "../../features";
import { CustomerContextProvider, CustomerSwitcher } from "../Customer";
import { Logo } from "../Logo";

type Props = {
  to: string;
  children: string | React.ReactNode;
};

const WsNavLink = ({ to, children }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isActive
          ? "text-red-700"
          : isPending
            ? "text-yellow-600 "
            : "dark:text-slate-300"
      }
    >
      {children}
    </NavLink>
  );
};

export const Menu = () => {
  return (
    <div>
      <nav>
        <ul className="flex items-center">
          <li className="mr-3">
            <WsNavLink to={routes.HOME.path}>
              <Logo />
            </WsNavLink>
          </li>
          <li className="mr-3">
            <WsNavLink to={routes.HOME.path}>Home</WsNavLink>
          </li>
          <li className="mr-3">
            <WsNavLink to={routes.DYNAMIC.path}>Dynamic Form</WsNavLink>
          </li>
          <li className="mr-3">
            <WsNavLink to={routes.GENERATOR.path}>Generator</WsNavLink>
          </li>
          <li className="mr-3">
            <WsNavLink to={routes.HISTORY.path}>History</WsNavLink>
          </li>
          <li className="mr-3">
            <WsNavLink to={routes.STEPPER.path}>Stepper</WsNavLink>
          </li>
          <li className="mr-3">
            <WsNavLink to={routes.USERLIST.path}>User List</WsNavLink>
          </li>
          <li className="mr-3">
            <WsNavLink to={routes.PRODUCTS.path}>Products</WsNavLink>
          </li>
          <li className="mr-3">
            <Basket />
          </li>
        </ul>
        <div className="flex items-start">
          <CustomerSwitcher />
        </div>
      </nav>
    </div>
  );
};
