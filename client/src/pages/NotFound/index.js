import {
    Button,
    Typography,
    Grid
} from '@mui/material'
import { Helmet } from 'react-helmet'
import SpaIcon from '@mui/icons-material/Spa'

const buttonStyle = {
    color:'white',
    backgroundColor:'#ff6900',
    '&:hover':{backgroundColor:'#670067'}
}

export default function Error() {
    return (
        <>
            <Helmet>
                <title>Página 404</title>
            </Helmet>

            <Grid container
                align='center'
                spacing={3}
                direction='column'>

                <Grid item
                    sx={{

                        color:'#ff6900',
                        display: 'flex',
                        justifyContent: 'flex-start',
                    }}>
                    <SpaIcon fontSize='large' /> 
                </Grid>

                <Grid item
                    style={{marginTop:140}}>
                    <Typography
                        variant='h4'
                        color='#ff6900'
                    >Esta página não pode ser encontrada.</Typography>
                </Grid>

                <Grid item>
                    <Button
                        variant='contained'
                        href='/dashboard'
                        size='large'
                        sx={buttonStyle}
                    >Página Principal</Button>
                </Grid>
            </Grid>
        </>
    )
}
