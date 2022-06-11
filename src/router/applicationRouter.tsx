import { Routes, Route } from "react-router-dom";
import * as ROUTES from "../constants//routes";
import Dashboard from "../pages/dashboard";
import Ficha from "../pages/ficha";
import NuevaOferta from "../pages/nuevaOferta";


export function ApplicationRouter() {
    return(
        <>
            <Routes>
                <Route path={ROUTES.APPDASH || "/"} element={<Dashboard />} />
                <Route path={ROUTES.FICHA} element={<Ficha />} />
                <Route path={ROUTES.NUEVAOFERTA} element={<NuevaOferta />} />
            </Routes>
        </>   
    )
}