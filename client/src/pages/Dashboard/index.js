import Chart from '../../components/chart'
import { Grid, Typography } from '@mui/material' 

export default function Home() {
    return (
        <Grid container spacing={3} direction="column">
            <Grid item>
                <Typography variant="h4" style={{marginTop: 15}}>
                    Bem vindo (a)
                </Typography>
            </Grid>
            <Grid item>
                <Chart />
            </Grid>
        </Grid>
    )
}
