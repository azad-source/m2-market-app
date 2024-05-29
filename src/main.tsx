import React from "react";
import ReactDOM from "react-dom/client";
import "./reset-styles.css";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/routes/ErrorPage.tsx";
import CurrencyDetailsPage from "./components/routes/CurrencyDetailsPage.tsx";
import CurrenciesPage from "./components/routes/CurrenciesPage.tsx";
import { RoutePath } from "domain/routPaths.ts";
import AppRoot from "components/routes/AppRoot.tsx";

const router = createBrowserRouter([
  {
    path: RoutePath.baseUrl,
    element: <AppRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: RoutePath.baseUrl,
        element: <CurrenciesPage />,
      },
      {
        path: RoutePath.currency,
        element: <CurrencyDetailsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
