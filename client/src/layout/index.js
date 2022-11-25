import { Outlet } from 'react-router-dom'
import { Stack } from '@mui/material'
import { Container } from '@mui/system'
import Sidebar from './sidebar'
import Header from './header'

export default function layout() {
    return (
        <Stack direction='row'>
            <Sidebar />
            <Container direction='column'>
                <Header/>
                <Outlet />
            </Container>
        </Stack>
    )
}
