import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorElement from "../Layout/ErrorElement/ErrorElement";
import About from "../Pages/About/About";
import ProjectOneDetails from "../ProjectDetails/ProjectOneDetails";
import ProjectTwoDetails from "../ProjectDetails/ProjectTwoDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/projectOne",
                element: <ProjectOneDetails></ProjectOneDetails>
            },
            {
                path: "/projectTwo",
                element: <ProjectTwoDetails></ProjectTwoDetails>
            }
        ]
    },
]);

export default router;