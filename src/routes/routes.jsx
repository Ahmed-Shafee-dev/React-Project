import { createBrowserRouter } from "react-router-dom";
import Login from "../login/Login";
import HomePage from "../pages/home/HomePage";
import ContactUS from "../components/contactUs/ContactUS";
import StartedPage from "../singlePage/startedPage";

export const routing = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/home",
        element: <StartedPage />,
    },
    {
        path: "/GetStarted",
        element: <HomePage />,
        children: [
            {
                path: "",
                element: <ContactUS />,
            },
        ],
    },
]);
