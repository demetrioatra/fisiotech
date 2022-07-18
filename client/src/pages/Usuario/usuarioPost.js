import { useState } from "react"
import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography
} from "@mui/material"
import AddRoundedIcon from '@mui/icons-material/AddRounded'

// Styles
const paperStyle = {
  padding: 20,
  height: '35vh',
  margin: '0 auto',
  borderRadius: 20
}

const Usuario = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuario = { email, password }

    fetch('http://localhost:3500/usuarios', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario)
    }).then(() => {
      console.log('Novo usuário adicionado!')
    }).catch(() => {
      console.log('...')
    })
  }

  return (
    <Grid container
      spacing={2}
      direction="column">
      <form onSubmit={handleSubmit}>
        <Grid item>
          <Typography
            variant="h5"
            style={{ marginTop: 15 }}
          ><b>Novo Usuário</b></Typography>
        </Grid>
        <Grid item>
          <Paper
            style={paperStyle}>
            <Grid container
            direction="column"
            spacing={2}>
              <Grid item>
                <TextField
                  label = 'E-mail'
                  fullWidth
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  label = 'Password'
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  startIcon={<AddRoundedIcon />}
                >Adicionar um plano</Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </form>
    </Grid>
  )
}

export default Usuario;