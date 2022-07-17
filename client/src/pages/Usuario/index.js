import { Grid, Typography } from '@mui/material'
import DataGrid from '../../components/table/DataGridUsuario';

export default function Usuario() {
    return (
        <Grid container
        spacing={3}
        direction="column">
            <Grid item>
                <Typography
                variant="h5"
                style={{marginTop: 15}}
                >Usuários</Typography>
            </Grid>
            <Grid item>
                <DataGrid />
            </Grid>
        </Grid>
    )
}
