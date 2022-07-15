import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import SideBar from '../../components/sidebar'
import Header from '../../components/header'
import Chart from '../../components/chart'
import './index.css'

export default function Home() {
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
        <Grid container spacing={2}>
            <Header />
            <SideBar />
            <Grid item><Chart /></Grid>
            <Grid item><Chart /></Grid>
        </Grid>
    )
}
