import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import {makeStyles} from '@mui/material'
import './index.css'

import SideBar from '../../components/sidebar'
import Header from '../../components/header'
import Chart from '../../components/chart'
import { NoMeals } from '@mui/icons-material'



export default function Home() {
    const [pacientes, setPaciente] = useState([]);

    useEffect(() => {
        function loadPacientes() {
            let getRoute = 'http://localhost:3500/pacientes'

            fetch(getRoute)
                .then((res) => res.json())
                .then((json) => {
                    setPaciente(json)
                })
        }
        loadPacientes()
    }, [])

    return (
        <Grid container spacing={1}>
            <Header  />
            <SideBar />
            <Grid className='bemvindo'>
                <h1> Seja bem vindo(a) "Nome-Fisioterapeuta" </h1>
            </Grid>
        </Grid>
    )
}
