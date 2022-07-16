import { Grid } from '@mui/material'
import SideBar from '../../components/sidebar'
import Header from '../../components/header'
<<<<<<< HEAD
import Chart from '../../components/chart'


=======
import './index.css'
>>>>>>> 6acb1ca34e89920e4963b8d776ab324883444321

export default function Home() {
    return (
        <Grid container spacing = { 1 }>
            <Header  />
            <SideBar />
<<<<<<< HEAD
            <Grid className='bemvindo' margin='auto' paddingTop='20px' >
                <h2> Seja bem vindo(a) "Nome-Fisioterapeuta" </h2>
=======
            <Grid className = 'bemvindo'>
                <h1> Seja bem vindo(a) "Nome-Fisioterapeuta" </h1>
>>>>>>> 6acb1ca34e89920e4963b8d776ab324883444321
            </Grid>
        </Grid>
    )
}
