import { 
    About, 
    Main, 
    Profile, 
    SignIn, 
    SignUp 
} from "@/pages";
import { RouteObject } from "react-router-dom";

enum AppRoutes {
    // публичные 
    SIGN_IN = 'sign_in',
    SIGN_UP = 'sign_up',
    // приватные
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.SIGN_IN]: 'sign_in',
    [AppRoutes.SIGN_UP]: 'sign_up',

    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: 'about',
    [AppRoutes.PROFILE]: '/profile'
}

export const RouteConfig: Record<AppRoutes, RouteObject> = {
    [AppRoutes.SIGN_IN]: {
        path: RoutePath.sign_in,
        Component: SignIn
    },
    [AppRoutes.SIGN_UP]: {
        path: RoutePath.sign_up,
        Component: SignUp
    },

    [AppRoutes.MAIN]: {
        index: true,
        Component: Main
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        Component: About
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}/:id`,
        Component: Profile
    }
}

export const PublicRoutes =
    Object.values(RouteConfig)
        .slice(0, 2)
        .map(({
            Component,
            path,
        }) => ({
            path,
            Component
        }))

export const ProtectedRoutes =
    Object.values(RouteConfig)
        .slice(2)
        .map(({ Component, path, index }) => {
            if (Component === Main) {
                return {
                    Component,
                    index
                };
            } else {
                return {
                    Component,
                    path
                };
            }
        });
