import { Grid } from '@mui/material'
import SideBar from '../../components/sidebar'
import Header from '../../components/header'

export default function Usuario() {
    return (
        <Grid container>
            <Header />
            <SideBar />
            <Grid item></Grid>
        </Grid>
    )
}