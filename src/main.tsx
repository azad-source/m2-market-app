import React from "react";
import ReactDOM from "react-dom/client";
import "./reset-styles.css";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/routes/ErrorPage.tsx";
import ProductDetailsPage from "./components/routes/ProductDetailsPage.tsx";
import ProductsPage from "./components/routes/ProductsPage.tsx";
import { RoutePath } from "domain/routPaths.ts";
import AppRoot from "components/routes/AppRoot.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: RoutePath.product,
        element: <ProductDetailsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
