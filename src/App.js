import React from "react";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Portfolio from "./Portfolio";

export default function App() {
  let routers = createBrowserRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Home></Home> },

        { path: "about", element: <About></About> },
        { path: "Portfolio", element: <Portfolio></Portfolio> },
        {
          path: "contact",
          element: <Contact></Contact>,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}
