import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalProvider from "./contexts/Provider";
import Routes from "./pages/routes";

const App = () => {
    const router = createBrowserRouter(Routes());
    return (
      <GlobalProvider>
        <RouterProvider router={router} />
      </GlobalProvider>
    );
  }

export default App;