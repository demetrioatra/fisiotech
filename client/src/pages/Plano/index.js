import { Grid } from '@mui/material'
import SideBar from '../../components/sidebar'
import Header from '../../components/header'
import DataGrid from '../../components/table/DataGridPlano';

function Plano() {
    return (
        <>
            <Header />
            <SideBar />
            <h3>Planos</h3>
            <Grid container>
                <DataGrid />
            </Grid>
        </>
    )
}

export default Plano