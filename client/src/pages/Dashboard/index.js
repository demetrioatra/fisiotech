import { Grid, Paper } from '@mui/material'
import SideBar from '../../components/sidebar'
import Header from '../../components/header'
import Chart from '../../components/chart'
import Demo from '../../components/chart'

import './index.css'

export default function Home() {
    return (
        <>
            <Grid>  
                <Grid>
                    <Header  />
                </Grid >
                <Grid>
                    <SideBar />
                </Grid>
                <Paper container direction='row' justifyContent='center' alignItems='flex-end' >
                    <Demo />
                </Paper>
            </Grid>
        </>
    )
}
