import { Routes, Route } from "react-router-dom";
import * as ROUTES from '../constants/routes';
import LoginPage from "../pages/loginPage";

export default function AuthRouter () {
    return(
        <Routes>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} /> 
        </Routes>
    );
}