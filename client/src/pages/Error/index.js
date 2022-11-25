import {
    Button,
    Typography,
    Grid
} from '@mui/material'
import { Helmet } from 'react-helmet'

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
                align="center"
                spacing={3}
                direction="column">

                <Grid item
                    style={{marginTop:80}}>
                    <Typography
                        variant='h4'
                        marginTop={22}
                        color="#ff6900"
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
