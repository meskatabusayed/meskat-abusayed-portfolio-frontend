import App from "@/App";
import Blogs from "@/pages/Blogs";
import Login from "@/pages/Login";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "@/pages/Home";
import DashboardPage from "@/pages/DashboardPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
     
    ],
  },
  {
    path : "/dashboard",
    element: <DashboardPage/>,
    children: [
      {
        path: "/dashboard/projects",
        element: (
          <PrivateRoute>
            <Projects />
          </PrivateRoute>
        ),
      },
     

    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
]);

export default router;
