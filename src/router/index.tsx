import App from "@/App";
import Blogs from "@/pages/Blogs";
import Login from "@/pages/Login";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "@/pages/Home";
import DashboardPage from "@/pages/DashboardPage";
import ProjectDetails from "@/pages/ProjectDetails";


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
      
      {
        path: "/dashboard/projects",
        element: (
          <PrivateRoute>
            <Projects />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/blogs",
        element: (
          <PrivateRoute>
           <Blogs/>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/skills",
        element: (
          <PrivateRoute>
            <Skills />
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
    path: "/projects/:id",
    element: <ProjectDetails/>,
  },
  
]);

export default router;
