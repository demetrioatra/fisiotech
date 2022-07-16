import { Grid } from '@mui/material'
import DataGrid from '../../components/table/DataGridPlano';

function Plano() {
    return (
        <>
            <h3>Planos</h3>
            <Grid container>
                <DataGrid />
            </Grid>
        </>
    )
}

export default Plano