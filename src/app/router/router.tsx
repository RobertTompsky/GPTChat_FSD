import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { NotFound } from "@/pages";
import { 
    ProtectedRoutes, 
    PublicRoutes
} from "./routeConfig";
import { Protected, Public } from "./routeTypes";
import { basePath } from "@/shared/lib/variables";

export const router = createBrowserRouter([
    {
        path: basePath,
        Component: App,
        errorElement: <NotFound />,
        children: [
            {
                Component: Public,
                children: PublicRoutes
            },
            {
                Component: Protected,
                children: ProtectedRoutes
            }
        ]
    }
])