import { Grid } from '@mui/material'
import DataGrid from '../../components/table/DataGridUsuario';
import './index.css'

export default function Usuario() {
    return (
        <>
            <h3>Usuários</h3>
            <Grid container>
                <DataGrid />
            </Grid>
        </>
    )
}