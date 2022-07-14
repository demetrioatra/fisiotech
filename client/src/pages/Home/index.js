import { useState, useEffect } from 'react'
import SideBar from '../../components/sidebar'
import Header from '../../components/header'
import Chart from '../../components/chart'
import './index.css'
import { Grid } from '@mui/material'

function Home() {
    const [pacientes, setPaciente] = useState([])

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
        <Grid container>
            <Header />
            <SideBar />
            <Grid item><Chart /></Grid>
        </Grid>
    )
}

export default Home