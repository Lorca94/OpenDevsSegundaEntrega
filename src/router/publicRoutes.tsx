import React from "react";
import { Navigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";

interface Props {
    children: JSX.Element,
    isLogged: boolean
}

export const PublicRoutes: React.FC<Props> = ({ children, isLogged }) => {
    return isLogged ? <Navigate to={ROUTES.APPDASH} /> : children
}