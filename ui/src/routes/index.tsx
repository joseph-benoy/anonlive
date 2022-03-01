import ChatSettings from "../pages/chatSettings";
import Home from "../pages/home";
const routes = [
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"chat",
        element:<ChatSettings/>
    },
];

export default routes;