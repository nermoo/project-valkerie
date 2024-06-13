import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Homepage/homepage";
import LoginPage from '../pages/Login/login'


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
  ]);

  export default Router;