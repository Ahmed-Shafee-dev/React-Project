import React from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import CustomCountainer from "../customContainer/CustomCountainer";

export default function Layout() {
    return (
        <>
            <Navbar />
            <CustomCountainer>
                <Outlet />
            </CustomCountainer>
        </>
    );
}
