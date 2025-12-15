import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Cart from "./Billing/Cart";
import App from "./App";
import Main from "./Components/Main";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

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
  {
    path: "/cart",
    element: <Cart />,
  },
]);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
