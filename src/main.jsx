import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error.jsx";
import Contact from "./components/Contact.jsx";
import Body from "./components/Body.jsx";
import RestaurentMenu from "./components/RestaurentMenu.jsx";
import Profile from "./components/Profile.jsx";
import LoginPage from "./components/LoginPage.jsx";
import Shimmer from "./components/Shimmer.jsx";

const InstaMart = lazy(() => import("./components/InstaMart.jsx"));
const About = lazy(() => import("./components/About.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <Error />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "restaurent/:resId",
        element: <RestaurentMenu />,
      },
      {
        path: "/InstaMart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
