import { Grid } from '@mui/material'
import SideBar from '../../components/sidebar'
import Header from '../../components/header'

export default function Paciente() {
    return (
        <Grid container>
        <Header />
        <SideBar />
        <Grid item></Grid>
        </Grid>
    )
}