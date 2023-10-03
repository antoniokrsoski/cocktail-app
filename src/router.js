import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Home from "./Home.js"
import PageNotFound from "./PageNotFound.js";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/*",
        element: <PageNotFound />
      },
      {
        index: true,
        element: <Home />
      } 
    ]
  },
]);
export default router