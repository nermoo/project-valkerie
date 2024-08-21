import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Homepage/homepage";
import LoginPage from '../pages/Login/login';
import MovieDetails from "../pages/MovieDetails/movieDetails";


const Router = createBrowserRouter([
    {
      path: "/",
      element: (
          <HomePage/>
      ),
    },
    {
      path: "/login",
      element: (
          <LoginPage/>
      ),
    },
    {
      path: "/:movieId",
      element: (
          <MovieDetails/>
      ),
    },
  ]);

  export default Router;