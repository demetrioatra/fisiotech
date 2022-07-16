import { Grid } from '@mui/material'
import SideBar from '../../components/sidebar'
import Header from '../../components/header'
import DataGrid from '../../components/table/DataGridUsuario';
import './index.css'

export default function Usuario() {
    return (
        <>
            <SideBar />
            <Header />
            <h3>Usuários</h3>
            <Grid container>
                <DataGrid />
            </Grid>
        </>
    )
}