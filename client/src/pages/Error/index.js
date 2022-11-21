import {
    Button,
    Typography,
    Grid
} from '@mui/material'
import { Helmet } from 'react-helmet'
import ReportProblemIcon from '@mui/icons-material/ReportProblem'

const buttonStyle = {
    color: 'white',
    backgroundColor:
        '#ff6900',
    '&:hover': { backgroundColor: '#670067' }
}

export default function Error() {
    return (
        <>
            <Helmet>
                <title>Página 404</title>
            </Helmet>

            <Grid container
                align="center"
                spacing={2}
                direction="column">
                <Grid item
                    style={{ marginTop: 40 }}>
                    <Typography
                        variant='h4'
                        marginTop={22}
                        color="#ff6900">
                        <ReportProblemIcon
                            fontSize='lg'
                        />| Esta página não pode ser encontrada.</Typography>
                </Grid>
                <Grid item>
                    <Button
                        variant='contained'
                        href='/dashboard'
                        size='large'
                        fontSize='large'
                        sx={buttonStyle}
                    >Home</Button>
                </Grid>
            </Grid>
        </>
    )
}
