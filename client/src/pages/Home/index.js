import { Grid } from '@mui/material'
import SideBar from '../../components/sidebar'
import Header from '../../components/header'
import './index.css'

export default function Home() {
    return (
        <Grid container spacing = { 1 }>
            <Header  />
            <SideBar />
            <Grid className='bemvindo' margin='auto' paddingTop='20px' >
                <h1> Seja bem vindo(a) "Nome-Fisioterapeuta" </h1>
            </Grid>
        </Grid>
    )
}
