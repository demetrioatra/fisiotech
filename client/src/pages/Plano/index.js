import { Grid, Typography } from '@mui/material'
import DataGrid from '../../components/table/DataGridPlano';

export default function Plano() {
    return (
        <Grid container
        spacing={3}
        direction="column">
            <Grid item>
                <Typography
                variant="h5"
                style={{marginTop: 15}}
                >Planos</Typography>
            </Grid>
            <Grid item>
                <DataGrid />
            </Grid>
        </Grid>
    )
}
