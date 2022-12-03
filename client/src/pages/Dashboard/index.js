import {
  useEffect,
  useState
} from 'react'
import {
  Grid,
  Typography
} from '@mui/material' 
import { Helmet } from 'react-helmet'
import { getDesafioPatologia } from '../../api'
import Card from '../../components/card'
import Painel from '../../components/painel'
import Grafico from '../../components/grafico'

export default function Home() {

  const [setContPat] = useState([])

  useEffect(() => {
    (async () => {
      const resCount = await getDesafioPatologia()
      setContPat(resCount.data)
    })()
  }, [])

  return (
    <>
      <Helmet>
        <title>Dashboard | Fisiotech</title>
      </Helmet>

      <Typography variant='h5' style={{marginTop: 15}}>
          <b>Olá, bem vindo(a) de volta</b>
      </Typography>

      <Grid container spacing={3} style={{marginTop: '2%'}}>

        <Grid item xs={12} sm={6} md={3}>
          <Painel title='Primeiro indicador' total={3} sx={{borderRadius: '10px'}} />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Painel title='Segundo indicador' total={15} sx={{borderRadius: '10px'}} />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Painel title='Terceiro indicador' total={100} sx={{borderRadius: '10px'}} />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Painel title='Quarto indicador' total={3} sx={{borderRadius: '10px'}} />
        </Grid>

        <Grid item>
          <Grafico />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Card 
            title='Tráfego por site'
            sx={{borderRadius: '10px'}}
            list={[
              {
                name: 'FaceBook',
                value: 323234
              },
              {
                name: 'Google',
                value: 341212
              },
              {
                name: 'Linkedin',
                value: 411213
              },
              {
                name: 'Twitter',
                value: 443232
              }
              ]}
            />
        </Grid>
      </Grid>
    </>
  )
}
