import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";
import SalesInput from "./pages/SalesInput.jsx";
import Inventory from "./pages/Inventory.jsx";
import Statistics from "./pages/Statistics.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
     {
          path: "/",
          element: <Root />,
          children: [
               {
                    index : true ,
                     element : <Home />
               }
               ,
               {
                    path: "/salesinput",
                    element: <SalesInput />,
               },
               { path: "/inventory", element: <Inventory /> },
               { path: "/statistics", element: <Statistics />},
          ],
     },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode>
          <Provider store={store}>
               <RouterProvider router={router} />
          </Provider>
     </React.StrictMode>
);
