import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootNavigation from "./pages/RootNavigation/RootNavigation";
import Home from "./pages/Home/Home";
import Settings from "./pages/Settings/Settings";
import SignIn from "./pages/SignIn/SignIn";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootNavigation />,
        children: [
            {path: "/", element: <Home />},
            {path: "/settings", element: <Settings />}
        ]
    },
    {
        path: '/sign-in',
        element: <SignIn />
    }
]);

const App = () => {
  return <RouterProvider router={router} />

}

export default App;
