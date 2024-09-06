import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Cart from "./Billing/Cart";
import App from "./App";
// import Login from "./Components/Login";
import Main from "./Components/Main";
import Modal from "./Components/Modal";
import Card from "./Components/Card";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/books",
    element: <Main />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  // {
  //   path: "/cart",
  //   element: <Cart />,
  // },
]);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
