import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import appRouter from "./src/router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
