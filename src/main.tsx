import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Root from "./routes/root";
import Contact from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout children={<Root />} />,
  },
  {
    path: "/contact",
    element: <Layout children={<Contact />} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
