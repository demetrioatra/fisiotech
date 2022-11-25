import {
    Button,
    Grid,
    Typography
} from '@mui/material'
import { Helmet } from 'react-helmet'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import DataGrid from '../../components/grid/DataGridPlano'

export default function Plano() {
    return (
        <>
            <Helmet>
                <title>Planos | Fisiotech</title>
            </Helmet>

            <Grid container
            spacing = { 3 }
            direction = "column">
                <Grid item>
                    <Grid container
                        direction="row"
                        style={{justifyContent:"space-between"}}>
                            <Typography
                            variant = "h5"
                            style = { { marginTop: 15 } }
                            ><b>Planos</b></Typography>
                            <Button
                                variant="contained"
                                href='http://localhost:3000/plano/post'
                                size="small"
                                startIcon={<AddRoundedIcon />}
                                sx={{
                                    marginRight:"15px",
                                    height: "40px",
                                    borderRadius:4,
                                    color:'white',
                                    backgroundColor:'#ff6900',
                                    '&:hover':{backgroundColor:'#670067'}
                                }}
                            >Novo Plano</Button>
                    </Grid>
                </Grid>

                <Grid item>
                    <DataGrid />
                </Grid>
            </Grid>
        </>
    )
}
