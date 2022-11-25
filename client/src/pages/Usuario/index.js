import {
    Button,
    Grid,
    Typography
} from '@mui/material'
import { Helmet } from 'react-helmet'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import DataGrid from '../../components/grid/DataGridUsuario'

export default function Usuario() {
    return (
        <>
            <Helmet>
                <title>Usuários | Fisiotech</title>
            </Helmet>

            <Grid container
                spacing={3}
                direction="column">
                <Grid item>
                    <Grid container
                        direction="row"
                        style={{justifyContent:"space-between"}}>
                        <Typography
                            variant="h5"
                            style={{marginTop:15}}
                        ><b>Usuários</b></Typography>
                        <Button
                            href='http://localhost:3000/usuario/post'
                            variant="contained"
                            size="small"
                            startIcon={<AddRoundedIcon />}
                            sx={{
                                marginRight:"15px",
                                height:"40px",
                                borderRadius:4,
                                color:'white',
                                backgroundColor:'#ff6900',
                                '&:hover':{backgroundColor:'#670067'}
                            }}
                        >Novo Usuário</Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <DataGrid />
                </Grid>
            </Grid>
        </>
    )
}
