import Chat from "../pages/chat/Chat";
import ChatSettings from "../pages/chatSettings";
import Home from "../pages/home";
import Owner from "../pages/Room/owner";
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
        element:<Owner/>,
    },
    {
        path:"chat/new",
        element:<ChatSettings/>,
    }
];

export default routes;