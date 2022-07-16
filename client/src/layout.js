import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar"
import Header from "./components/header"

export default function layout() {
    return (
        <>
            <Sidebar />
            <Header />
            <Outlet />
        </>
    )
}