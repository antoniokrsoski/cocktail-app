import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from "../pages/home/Home.js"
import PageNotFound from "../components/PageNotFound.js";
import carouselLoader from "./carouselLoader.js";
import SearchResult from "../pages/results/SearchResult.js";
import searchLoader from "./searchLoader.js";
import cocktailLoader from "./cocktailLoader.js";
import SingleDrink from "../pages/singledrink/SingleDrink.js";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/search-results/:searchQuery",
        element: <SearchResult />,
        loader: ({ params }) => {
          return searchLoader(params.searchQuery);
        },
      },
      {
        path: "/cocktail-details/:id",
        element: <SingleDrink />,
        loader: ({ params }) => {
          return cocktailLoader(params.id);
        },
      },
      {
        path: "/*",
        element: <PageNotFound />
      },
      {
        index: true,
        element: <Home />,
        loader: carouselLoader,
      }
    ]
  },
]);
export default router