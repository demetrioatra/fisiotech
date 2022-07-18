import Chart from '../../components/chart'
import { Grid, Typography } from '@mui/material' 

export default function Home() {
    return (
        <Grid container spacing={3} direction="column">
            <Grid item>
                <Typography variant="h5" style={{marginTop: 15}}>
                    <b>Bem vindo (a)</b>
                </Typography>
            </Grid>
            <Grid item>
                <Chart />
            </Grid>
        </Grid>
    )
}
