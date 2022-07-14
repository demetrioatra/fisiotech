import { Button, TextField, Grid, Paper } from '@mui/material'
import SpaIcon from '@mui/icons-material/Spa';
import './index.css'

function SignIn() {
    const paperStyle = {padding: 20, height: '70vh', width: 380, margin: '0 auto'}

    return (
        <Grid align="center">
            <Grid>
                <h1 className='logo'><SpaIcon className='icon' /> Fisiotech</h1>
            </Grid>
            <Paper elevation={2} style={paperStyle}>
                <h2>Sign In to continue</h2>
                <Grid container spacing={2} direction="column" style={{marginTop: 20}}>
                    <Grid item><TextField label="Email" fullWidth required/></Grid>
                    <Grid item><TextField label="Password" fullWidth required/></Grid>
                    <Grid item><Button variant='contained' fullWidth>Sign In</Button></Grid>
                    <Grid item><p>OR</p></Grid>
                    <Grid item><Button variant='contained' fullWidth>Google</Button></Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default SignIn