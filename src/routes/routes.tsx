import { createBrowserRouter } from "react-router-dom";
import { Layout, UserList } from "../components";
import { HomePage } from "../pages/HomePage";
import { DynamicPage } from "../pages/DynamicPage";
import { GeneratorPage } from "../pages/GeneratorPage";
import { HistoryPage } from "../pages/HistoryPage";
import { StepperPage } from "../pages/StepperPage";
import { ProductsPage } from "../pages/ProductsPage";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";
import { CreateProductPage } from "../pages/CreateProductPage";

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
  PRODUCT_DETAILS: {
    path: "/products/:id",
  },
  CREATE_PRODUCT: {
    path: "/products/create",
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
      {
        path: routes.PRODUCT_DETAILS.path,
        element: <ProductDetailsPage />,
      },
      {
        path: routes.CREATE_PRODUCT.path,
        element: <CreateProductPage />,
      },
    ],
  },
]);
