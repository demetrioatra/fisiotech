import {
    Button,
    Grid,
    Typography
} from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import DataGrid from '../../components/table/DataGridPaciente'

export default function Paciente() {
    return (
        <Grid container
        spacing = { 3 }
        direction = "column">
            <Grid item>
                <Grid container
                direction = "row"
                style = { { justifyContent: "space-between" } }>
                    <Typography
                    variant = "h5"
                    style = { { marginTop: 15 } }
                    ><b>Pacientes</b></Typography>
                    <Button
                    variant = "contained"
                    size = "small"
                    startIcon = { <AddRoundedIcon /> }
                    style={{borderRadius: 10}}
                    >Novo Paciente</Button>
                </Grid>
            </Grid>
            <Grid item>
                <DataGrid />
            </Grid>
        </Grid>
    )
}
