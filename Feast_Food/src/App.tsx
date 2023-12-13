import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard.tsx";
import ManageCategory from "./pages/ManageCategory.tsx";
import ManageItem from "./pages/ManageItem.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegistrationPage from "./pages/RegistrationPage.tsx";
import ForgotPassword from "./pages/ForgotPassword.tsx";
import HomePage from "./pages/homePage.tsx";
import ourMenu from "./pages/ourMenu.tsx";
import UserProfileView from "./pages/UserProfileView.tsx";
import OurMenu from "./pages/ourMenu.tsx";


function App(){
    return(
        <>
            <RouterProvider router={createBrowserRouter([
                {path:"/admindashboard",element:<AdminDashboard/>},
                {path:"/managecategory",element:<ManageCategory/>},
                {path:"/manageitem",element:<ManageItem/>},
                {path:"/LoginPage",element:<LoginPage/>},
                {path:"/RegistrationPage",element:<RegistrationPage/>},
                {path:"/ForgotPassword",element:<ForgotPassword/>},
                {path:"/",element:<HomePage/>},
                {path:"/ourmenu",element:<OurMenu/>},
                {path:"/userprofileview",element:<UserProfileView/>},
            ])} />
        </>
    )
}

export default App
