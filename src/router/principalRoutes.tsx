import React, { useContext } from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { PublicRoutes } from "./publicRoutes";
import AuthRouter from "./authRouter";
import { PrivateRoutes } from "./privateRoutes";
import { ApplicationRouter } from "./applicationRouter";
import AuthContext from "../store/authContext";

export default function PrincipalRoutes(){
    const ctx = useContext(AuthContext)
    console.log(ctx.onLogin)

    return(
        <BrowserRouter>
            <Routes>
                <Route
                path={ROUTES.AUTH}
                element={
                    <PublicRoutes isLogged={ctx.isLoggedIn}>
                        <AuthRouter />
                    </PublicRoutes>
                }
                />
                <Route
                path={ROUTES.APP}
                element={
                    <PrivateRoutes isLogged={ctx.isLoggedIn}>
                        <ApplicationRouter />
                    </PrivateRoutes>
                }
                />
            </Routes> 
        </BrowserRouter>
    )
}