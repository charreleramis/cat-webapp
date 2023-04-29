import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CatHomePage from "./pages/CatHomePage";
import CatSinglePage from "./pages/CatSinglePage";


const App = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <CatHomePage/>,
      },
      {
        path: "/:id",
        element: <CatSinglePage/>,
      },
    ]);
    return (<RouterProvider router={router} />);
  }

export default App;