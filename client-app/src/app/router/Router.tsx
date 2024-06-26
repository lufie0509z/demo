import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Homepage from "../../features/home/Homepage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import TestErrors from "../../features/errors/TestError";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";
import LoginForm from "../../features/users/LoginForm";
import Profilecard from "../../features/profiles/Profilecard";
import ProfilePage from "../../features/profiles/ProfilePage";


export const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            {path: '', element: <Homepage />},
            {path: 'activities', element: <ActivityDashboard />},
            {path: 'activities/:id', element: <ActivityDetails />},
            {path: 'createActivity', element: <ActivityForm key='create' />},
            {path: 'manage/:id', element: <ActivityForm key='manage' />},
            {path: 'errors', element: <TestErrors key='errors' />},
            {path: 'not-found', element: <NotFound key='not-found' />},
            {path: 'server-error', element: <ServerError key='server-error' />},

            {path: 'login', element: <LoginForm key='login' />},

            {path: 'profiles/:username', element: <ProfilePage key='profilepage' />}, 

            {path: '*', element: <Navigate replace to='/not-found' />},
    
        ]
    }
]

export const router = createBrowserRouter(routes);