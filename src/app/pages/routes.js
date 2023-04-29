import React from "react";
import CatHomePage from "./CatHomePage";
import CatSinglePage from "./CatSinglePage";

const Routes = () => {
    return (
        [{
            path: "/",
            element: <CatHomePage/>,
          },
          {
            path: "/:id",
            element: <CatSinglePage/>,
          }]
    );
}

export default Routes;
