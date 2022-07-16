import { Grid } from '@mui/material'
import SideBar from '../../components/sidebar'
import Header from '../../components/header'
import DataGrid from '../../components/table/DataGridPaciente';

export default function Paciente() {
    return (
        <>
            <Header />
            <SideBar />
            <h3>Pacientes</h3>
            <Grid container className = "sidebar">
                <DataGrid />
            </Grid>
        </>
    )
}