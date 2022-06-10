import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { PublicRoutes } from "./publicRoutes";
import AuthRouter from "./authRouter";
import { PrivateRoutes } from "./privateRoutes";
import { ApplicationRouter } from "./applicationRouter";
import NotFound from "../pages/notfound";

export default function PrincipalRoutes(){
    const isLogged = false;

    return(
        <BrowserRouter>
            <Routes>
                <Route
                path={ROUTES.AUTH}
                element={
                    <PublicRoutes isLogged={isLogged}>
                        <AuthRouter />
                    </PublicRoutes>
                }
                />
                <Route
                path={ROUTES.APP}
                element={
                    <PrivateRoutes isLogged={isLogged}>
                        <ApplicationRouter />
                    </PrivateRoutes>
                }
                />
            </Routes> 
        </BrowserRouter>
    )
}