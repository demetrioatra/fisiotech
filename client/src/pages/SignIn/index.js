import { Container, Button, TextField, Grid } from '@mui/material'

function SignIn() {
    return (
        <Container className='container' maxWidth='lg'>
            <Grid
            container
            spacing={2}
            direction='column'
            style={{minHeight: '100vh'}}>
                <Grid item>
                    <TextField type='email' fullWidth label='E-mail' />
                </Grid>
                <Grid item>
                    <TextField type='password' fullWidth label='Password' />
                </Grid>
                <Grid item>
                    <Button variant='contained' fullWidth>Login</Button>
                </Grid>
            </Grid>

        
            
        </Container>
    )
}

export default SignIn