import {
    Button,
    Grid,
    Typography
} from '@mui/material'
import { Helmet } from 'react-helmet'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import DataGrid from '../../components/grid/DataGridPaciente'

export default function Paciente() {
    return (
        <div>
            <Helmet>
                <title>Pacientes | Fisiotech</title>
            </Helmet>
            <Grid container
                spacing={3}
                direction='column'
                sx={{marginTop:'1px'}}>
                <Grid item>
                    <Grid container
                        direction='row'
                        style={{alignItems:'center', justifyContent:'space-between'}}>
                        <Typography variant='h5'><b>Pacientes</b></Typography>
                        <Button
                            href='http://localhost:3000/paciente/post'
                            variant='contained'
                            startIcon={<AddRoundedIcon />}
                            sx={{
                                marginRight:'15px',
                                height:'36px',
                                borderRadius:4,
                                color:'white',
                                backgroundColor:'#ff6900',
                                '&:hover':{backgroundColor:'#670067'}
                            }}
                        >Novo Paciente</Button>
                    </Grid>
                </Grid>
                <Grid item
                    sx={{marginTop:'20px'}}>
                    <DataGrid />
                </Grid>
            </Grid>
        </div>
    )
}
