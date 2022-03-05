import Chat from "../pages/chat/Chat";
import ChatSettings from "../pages/chatSettings";
import Home from "../pages/home";
const routes = [
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"home",
        element:<Home/>
    },
    {
        path:"chat",
        element:<Chat/>,
    },
    {
        path:"chat/new",
        element:<ChatSettings/>,
    }
];

export default routes;