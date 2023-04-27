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
        path: "/catType",
        element: <CatSinglePage/>,
      },
    ]);
  
    return ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
  }

  
export default App;