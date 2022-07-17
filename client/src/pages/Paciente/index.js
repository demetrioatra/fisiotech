import { Grid, Typography } from '@mui/material'
import DataGrid from '../../components/table/DataGridPaciente';

export default function Paciente() {
    return (
        <Grid container spacing={3} direction="column">
            <Grid item>
                <Typography
                variant = "h4"
                style={{marginTop: 15}}
                >Pacientes</Typography>
            </Grid>
            <Grid item className = "sidebar" >
                <DataGrid />
            </Grid>
        </Grid>
    )
}
