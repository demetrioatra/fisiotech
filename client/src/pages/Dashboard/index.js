import { useEffect, useState } from 'react'
import {
  Grid,
  Typography
} from '@mui/material' 
import Chart from '../../components/chart'
import Card from '../../components/card'
import { getDesafioPatologia } from '../../api'

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
          <b>Bem vindo (a)</b>
      </Typography>
      <Grid container spacing={5} direction="column" style={{marginTop: 0}}>
          <Grid item>
            <Chart/>
          </Grid>
          <Grid item>
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
                },
              ]}/>
          </Grid>
      </Grid>
    </>
  )
}
