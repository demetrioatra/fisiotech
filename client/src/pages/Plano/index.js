import { useEffect, useState } from "react"
import { Grid } from '@mui/material'
import SideBar from '../../components/sidebar'
import Header from '../../components/header'
import api from "../../api"
import DataGrid from '../../components/table/DataGrid';


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
        <>
            <Header />
            <SideBar />
            <Grid container>
                <DataGrid />
            </Grid>
        </>
    )
}

export default Plano