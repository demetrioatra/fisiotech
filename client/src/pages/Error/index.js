import {
    Button,
    Typography,
    Grid
} from '@mui/material'
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
            <Grid>
                <Grid>
                    <Typography
                    variant = 'h2'
                    marginTop = { 22 }
                    color = "#ff6900">
                        <ReportProblemIcon
                        className='errIcon'
                        fontSize = 'lg' />
                     | Esta página não pode ser encontrada.
                    </Typography>
                </Grid>
                <Grid
                align = 'center'>
                    <Button
                    variant = 'contained'
                    href = '/dashboard'
                    size = 'large'
                    fontSize = 'large'
                    sx = { buttonStyle }
                    >Home</Button>
                </Grid>
            </Grid>
        </>
    )
}
