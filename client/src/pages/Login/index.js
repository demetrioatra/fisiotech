import { Button, TextField, Grid, Paper } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import SpaIcon from '@mui/icons-material/Spa';
import lobtec from '../../imgs/lobtec.png'
import './index.css'

export default function Login() {
    const paperStyle = { padding: 20, height: '60vh', width: 380, margin: '0 auto' }

    return (
        <Grid align = "center">
            <Grid item>
                <h1 className = 'logo'>
                    <SpaIcon fontSize = 'lg' className = 'icon' /> Fisiotech
                </h1>
            </Grid>
            <Paper elevation = { 2 } style = { paperStyle }>
                <h2>Sign in to continue</h2>
                <Grid container spacing = { 2 } direction = "column" style = { { marginTop: 20 } }>
                    <Grid item>
                        <TextField label = "Email" fullWidth required/>
                    </Grid>
                    <Grid item>
                        <TextField label = "Password" fullWidth required/>
                    </Grid>
                    <Grid item>
                        <Button variant = 'contained' href = 'http://localhost:3000/home' fullWidth>Sign In</Button>
                    </Grid>
                    <Grid item><p>OR</p></Grid>
                    <Grid item>
                        <Button
                        href = 'http://localhost:3500/auth/google'
                        variant = 'outlined'
                        startIcon = { <GoogleIcon /> }
                        fullWidth
                        >Google</Button>
                    </Grid>
                </Grid>
                <img className='lob' src={lobtec}/>
            </Paper>
        </Grid>
    )
}
