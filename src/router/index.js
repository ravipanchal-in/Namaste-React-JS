import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../../App";
import Main from "../components/main/Main";
import About from "../pages/about";
import Contact from "../pages/contact";
import RestaurantDetails from "../pages/restaurant-details";
import NotFound from "../pages/not-found";

const Instamart = lazy(() => import("../pages/instamart"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetails />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<div>Loading.... please wait</div>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

export default appRouter;
