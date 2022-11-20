import {
    Button,
    Grid,
    Typography
} from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import DataGrid from '../../components/table/DataGridPaciente'

export default function Paciente() {
    return (
        <div>
            <Grid container
                spacing={3}
                direction="column">
                <Grid item>
                    <Grid container
                        direction="row"
                        style={{justifyContent: "space-between"}}>
                        <Typography
                            variant="h5"
                            style={{marginTop: 15}}
                        ><b>Pacientes</b></Typography>
                        <Button
                            href='http://localhost:3000/paciente/post'
                            variant="contained"
                            size="small"
                            startIcon={<AddRoundedIcon />}
                            sx={{borderRadius: 4, color: 'white', backgroundColor: '#ff6900', '&:hover':{backgroundColor: '#670067 '}}}
                        >Novo Paciente</Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <DataGrid />
                </Grid>
            </Grid>
        </div>
    )
}
