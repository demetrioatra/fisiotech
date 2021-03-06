import {
    Button,
    Grid,
    Typography
} from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import DataGrid from '../../components/table/DataGridPlano'

export default function Plano() {
    return (
        <Grid container
        spacing = { 3 }
        direction = "column">
            <Grid item>
                <Grid container
                direction="row"
                style = { { justifyContent: "space-between" } }>
                    <Typography
                    variant = "h5"
                    style = { { marginTop: 15 } }
                    ><b>Planos</b></Typography>
                    <Button
                    variant = "contained"
                    href = 'http://localhost:3000/plano/post'
                    size = "small"
                    startIcon = { <AddRoundedIcon /> }
                    sx = { { borderRadius: 4, color: 'white', backgroundColor: '#ff6900', '&:hover':{backgroundColor: '#670067 '} } }
                    >Novo Plano</Button>
                </Grid>
            </Grid>
            <Grid item>
                <DataGrid />
            </Grid>
        </Grid>
    )
}
