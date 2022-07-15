import { useEffect, useState } from "react"
import { Grid } from '@mui/material'
import SideBar from '../../components/sidebar'
import Header from '../../components/header'
import api from "../../api"


function Plano() {
    const [planos, setPlanos] = useState([])

    useEffect(() => {
        async function loadPlanos() {
            try {
                const res = await api.get('planos')

                console.log('Planos listados com sucesso...', res.data)
                setPlanos(res.data)
            } catch (err) {
                console.log('Falha ao listar planos...', err)
            }
        }

        loadPlanos()
    }, [])

    return (
        <Grid container>
            <Header />
            <SideBar />
            <Grid item></Grid>
        </Grid>
    )
}

export default Plano