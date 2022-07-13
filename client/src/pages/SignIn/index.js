import { Container, Button, TextField, Grid, Paper } from '@mui/material'
import './index.css'

function SignIn() {
    const paperStyle = {padding: 20, height: '60vh', width: 380, margin: '80px auto'}

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <h1>Fisiotech</h1>
                    <h2>Sign In</h2>
                </Grid>
                <Grid container spacing={2} direction="column" style={{marginTop: 20}}>
                    <Grid item><TextField label="Email" fullWidth required/></Grid>
                    <Grid item><TextField label="Password" fullWidth required/></Grid>
                    <Grid item><Button variant='contained' fullWidth>SignIn</Button></Grid>
                    <Grid item><Button variant='contained' fullWidth>Google</Button></Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default SignIn