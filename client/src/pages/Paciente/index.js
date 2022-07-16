import { Grid } from '@mui/material'
import SideBar from '../../components/sidebar'
import Header from '../../components/header'
import DataGrid from '../../components/table/DataGridPaciente';

export default function Paciente() {
    return (
        <>
            <Header />
            <SideBar />
            <Grid container className="sidebar">
                <h2>Pacientes</h2>
                <DataGrid />
            </Grid>
        </>
    )
}