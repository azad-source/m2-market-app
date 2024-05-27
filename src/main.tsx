import React from "react";
import ReactDOM from "react-dom/client";
import "./reset-styles.css";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/routes/ErrorPage.tsx";
import ProductDetailPage from "./components/routes/ProductDetailPage.tsx";
import AppRoot from "./components/routes/AppRoot.tsx";
import { RoutePath } from "domain/routPaths.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: RoutePath.product,
        element: <ProductDetailPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
