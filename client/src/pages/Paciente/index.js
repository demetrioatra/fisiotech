import { Grid } from '@mui/material'
import DataGrid from '../../components/table/DataGridPaciente';

export default function Paciente() {
    return (
        <>
            <h3>Pacientes</h3>
            <Grid container className = "sidebar" >
                <DataGrid />
            </Grid>
        </>
    )
}
