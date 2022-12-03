import { useState } from 'react'
import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography
} from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded'

// Styles
const paperStyle = {
  padding: 20,
  height: '45vh',
  margin: '0 auto',
  borderRadius: 20
}

const Usuario = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status] = useState('Ativo')

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuario = { nome, email, password, status }

    fetch('http://localhost:3500/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuario)
    }).then(() => {
      console.log('Novo usuário adicionado!')
    }).catch(() => {
      console.log('...')
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Typography
          variant='h5'
          style={{ marginTop: 15 }}
        ><b>Novo Usuário</b></Typography>
        <Paper
          style={paperStyle}>
          <Grid container
            direction='column'
            spacing={2}>
            <Grid item>
              <TextField
                label='Nome'
                fullWidth
                type='text'
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                label='E-mail'
                fullWidth
                type='text'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                label='Password'
                type='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item>
              <Button
                fullWidth
                type='submit'
                variant='contained'
                startIcon={<AddRoundedIcon />}
                sx={{ borderRadius: 3, color: 'white', backgroundColor: '#ff6900', '&:hover': { backgroundColor: '#670067 ' } }}
              >Adicionar Usuário</Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </>
  )
}

export default Usuario;