import ReportProblemIcon from '@mui/icons-material/ReportProblem'
import { Button } from '@mui/material'
import { Grid } from '@mui/material'
import './index.css'

export default function Error() {
    return (
        <div className = 'erro'>
            <Grid>
                <Grid>
                    <h1 className = 'errMsg'>
                        <ReportProblemIcon className='errIcon' fontSize = 'lg' /> | Esta página não pode ser encontrada.
                    </h1>
                </Grid>
                <Grid className = 'botao'>
                    <Button href='/dashboard' size='large' variant='outlined' sx={{color:'#ff6900'}} fontSize='large' >Home</Button>
                </Grid>
            </Grid>
        </div>
    )
}
