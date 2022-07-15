import { Grid } from '@mui/material'
import SideBar from '../../components/sidebar'
import Header from '../../components/header'
import DataGrid from '../../components/table/DataGrid';

export default function Paciente() {
    return (
        <>
            <Header />
            <SideBar />
            <Grid container>
                <DataGrid />
            </Grid>
        </>
    )
}