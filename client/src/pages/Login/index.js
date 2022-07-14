import { Button, TextField, Grid, Paper, Link } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import SpaIcon from '@mui/icons-material/Spa';
import './index.css'

export default function SignIn() {
    const paperStyle = {padding: 20, height: '68vh', width: 380, margin: '0 auto'}

    return (
        <Grid align = "center">
            <Grid>
                <h1 className = 'logo'>
                    <SpaIcon fontSize = 'lg' className = 'icon' /> Fisiotech
                </h1>
            </Grid>
            <Paper elevation = { 2 } style = { paperStyle }>
                <h2>Sign in to continue</h2>
                <Grid container spacing = { 2 } direction = "column" style = { { marginTop: 20 } }>
                    <Grid item>
                        <TextField label="Email" fullWidth required/>
                    </Grid>
                    <Grid item>
                        <TextField label="Password" fullWidth required/>
                    </Grid>
                    <Grid item>
                        <Button variant='contained' fullWidth>Sign In</Button>
                    </Grid>
                    <Grid item><p>OR</p></Grid>
                    <Grid item>
                        <Button
                        variant = 'outlined'
                        startIcon = { <GoogleIcon /> }
                        fullWidth
                        >Google</Button>
                    </Grid>
                    <Grid item>
                        <Link>Privacy policy | Terms</Link>
                        </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}
