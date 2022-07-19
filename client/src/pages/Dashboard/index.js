import Chart from '../../components/chart'
import { Grid, Paper, Typography } from '@mui/material' 
import { Box } from '@mui/system'

export default function Home() {
    return (
        <>
            <Typography variant="h5" style={{marginTop: 15}}>
                <b>Bem vindo (a)</b>
            </Typography>
            <Chart />
        </>
    )
}
