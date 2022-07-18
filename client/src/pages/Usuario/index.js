import {
    Button,
    Grid,
    Typography
} from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import DataGrid from '../../components/table/DataGridUsuario'

export default function Usuario() {
    return (
        <Grid container
        spacing = { 3 }
        direction = "column">
            <Grid item>
                <Grid container
                direction = "row"
                style = { { justifyContent: "space-between" } }>
                    <Typography
                    variant="h5"
                    style={{marginTop: 15}}
                    ><b>Usuários</b></Typography>
                    <Button
                    variant="contained"
                    size = "small"
                    startIcon={<AddRoundedIcon/>}
                    style={{borderRadius: 10}}
                    >Novo Usuário</Button>
                </Grid>
            </Grid>
            <Grid item>
                <DataGrid />
            </Grid>
        </Grid>
    )
}
