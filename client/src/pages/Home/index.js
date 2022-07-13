import { useState, useEffect } from 'react'
import SideBar from '../../components/sidebar'
import Header from '../../components/header'
import Chart from '../../components/chart'
import './index.css'

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
        <>
            <SideBar />
            <Header />
            <Chart />
        </>
    )
}

export default Home