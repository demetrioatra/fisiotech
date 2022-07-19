import Chart from '../../components/chart'
import Card from '../../components/card'
import { Grid, Paper, Typography } from '@mui/material' 
import { Box } from '@mui/system'

export default function Home() {
    return (
        <>
            <Typography variant="h5" style={{marginTop: 15}}>
                <b>Bem vindo (a)</b>
            </Typography>
            <Chart />
            <Card
            title='Tráfego por'
            list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                },
                {
                  name: 'Google',
                  value: 341212,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                },
              ]}/>
        </>
    )
}
