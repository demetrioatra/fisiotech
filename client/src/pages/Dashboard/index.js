import { useEffect, useState } from 'react'
import {Grid, Typography } from '@mui/material' 
import { getDesafioPatologia } from '../../api'
import Chart from '../../components/chart'
import Card from '../../components/card'
import Painel from '../../components/painel'


export default function Home() {

  const [contPat, setContPat] = useState([])

  useEffect(() => {
    (async () => {
      const resCount = await getDesafioPatologia()
      setContPat(resCount.data)
    })()
  }, [])

  return (
    <>
      <Typography variant="h5" style={{marginTop: 15}}>
          <b>Olá, bem vindo(a) de volta</b>
      </Typography>

      <Grid container spacing={3} style={{marginTop: "2%"}}>

        <Grid item xs={12} sm={6} md={3}>
          <Painel title="Primeiro indicador" total={1000} />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Painel title="Segundo indicador" total={5500} />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Painel title="Terceiro indicador" total={13} />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Painel title="Quarto indicador" total={1} />
        </Grid>

        <Grid item>
          <Chart/>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Card
            title='Tráfego por site'
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
                }
            ]}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <Card
            title='Tarefas'
            list={[]}
          />
        </Grid>
      </Grid>
    </>
  )
}
