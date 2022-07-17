import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar"
import Header from "./header"
import { Box, Stack } from "@mui/material";
import { Container } from "@mui/system";

export default function layout() {
    return (
        <Stack direction="row">
            <Sidebar />
            <Container direction="column">
                <Header/>
                <Outlet />
            </Container>
        </Stack>
    )
}