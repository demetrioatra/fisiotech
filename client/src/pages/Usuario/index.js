import { Grid } from '@mui/material'
import SideBar from '../../components/sidebar'
import Header from '../../components/header'
import DataGrid from '../../components/table/DataGrid';

export default function Usuario() {
    return (
        <>
            <SideBar />
            <Header />
            <h3>Usuarios</h3>
            <Grid container>
                <DataGrid />
            </Grid>
        </>
    )
}