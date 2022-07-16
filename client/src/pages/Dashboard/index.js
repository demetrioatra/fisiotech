import { Grid } from '@mui/material'
import SideBar from '../../components/sidebar'
import Header from '../../components/header'
import Chart from '../../components/chart'
import './index.css'

export default function Home() {
    return (
        <>
            <Header  />
            <SideBar />
            <Chart />
        </>
    )
}
