import { createBrowserRouter } from "react-router-dom";
import { Layout, UserList } from "../components";
import { HomePage } from "../pages/HomePage copy";
import { DynamicPage } from "../pages/DynamicPage";
import { GeneratorPage } from "../pages/GeneratorPage";
import { HistoryPage } from "../pages/HistoryPage";
import { StepperPage } from "../pages/StepperPage";
import { ProductsPage } from "../pages/ProductsPage";

export const routes = {
  HOME: {
    path: "/",
    //title
  },

  DYNAMIC: {
    path: "/dynamic_fields",
  },

  GENERATOR: {
    path: "/generator",
  },

  HISTORY: {
    path: "/history",
  },

  STEPPER: {
    path: "/stepper",
  },
  USERLIST: {
    path: "/userlist",
  },
  PRODUCTS: {
    path: "/products",
  },
};

export const router = createBrowserRouter([
  {
    path: routes.HOME.path,
    element: <Layout />,
    children: [
      {
        path: routes.HOME.path,
        element: <HomePage />,
      },
      {
        path: routes.DYNAMIC.path,
        element: <DynamicPage />,
      },
      {
        path: routes.GENERATOR.path,
        element: <GeneratorPage />,
      },
      {
        path: routes.HISTORY.path,
        element: <HistoryPage />,
      },
      {
        path: routes.STEPPER.path,
        element: <StepperPage />,
      },
      {
        path: routes.USERLIST.path,
        element: <UserList />,
      },
      {
        path: routes.PRODUCTS.path,
        element: <ProductsPage />,
      },
    ],
  },
]);
