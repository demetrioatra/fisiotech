import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography
} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import SpaIcon from '@mui/icons-material/Spa'
import lobtec from '../../imgs/lobtec.png'

const paperStyle = {
    padding: 20,
    height: '60vh',
    width: 380,
    margin:'0 auto',
    marginTop: 32
};

export default function Login() {
    return (
        <Grid align = "center">
            <Grid item>
                <Typography
                variant = 'h4'
                marginTop = { 4 }
                color = "#ff6900"
                ><SpaIcon fontSize = 'lg' className = 'icon' /> Fisiotech</Typography>
            </Grid>
            <Grid className = 'grid'>
                <Paper
                elevation = { 2 }
                style = { paperStyle }  >
                    <Typography
                    variant = 'h4'
                    style = { {color: '#ff6900' } }
                    >Sign in to continue</Typography>
                    <Grid container spacing = { 2 } direction = "column" style = { { marginTop: 20 } }>
                        <Grid item>
                            <TextField label = "E-mail" fullWidth required/>
                        </Grid>
                        <Grid item>
                            <TextField label = "Password" fullWidth required/>
                        </Grid>
                        <Grid item>
                            <Button
                                variant='contained'
                                href='http://localhost:3000/dashboard'
                                fullWidth
                                sx={{color:'white',
                                    backgroundColor:'#ff6900',
                                    '&:hover':{backgroundColor:'#670067'}
                                }}
                            >Sign In</Button>
                        </Grid>
                        <Grid item color = "#ff6900"><p>OR</p></Grid>
                        <Grid item>
                            <Button
                                variant='contained'
                                startIcon={<GoogleIcon />}
                                href='http://localhost:3500/auth/google'
                                fullWidth
                                sx={{color:'white',
                                    backgroundColor:'#ff6900',
                                    '&:hover':{backgroundColor:'#670067'}
                                }}
                            >Google</Button>
                        </Grid>
                    </Grid>
                    <img src={ lobtec }/>
                </Paper>
            </Grid>
        </Grid>
    )
}
