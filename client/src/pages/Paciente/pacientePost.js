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
  height: '69vh',
  margin: '0 auto',
  borderRadius: 20
}

const Paciente = () => {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [idade, setIdade] = useState('')
  const [email, setEmail] = useState('')
  const [origemid, setOrigemId] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const paciente = { nome, telefone, idade, email, origemid }

    fetch('http://localhost:3500/pacientes', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paciente)
    }).then(() => {
      console.log('Novo paciente adicionado')
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
          ><b>Novo Paciente</b></Typography>
        </Grid>
        <Grid item>
          <Paper
            style={paperStyle}>
            <Grid container
              direction="column"
              spacing={2}>
              <Grid item>
                <TextField
                  label='Nome'
                  fullWidth
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  label='Telefone'
                  fullWidth
                  type="text"
                  required
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  label='Idade'
                  fullWidth
                  type="text"
                  required
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  label='E-mail'
                  fullWidth
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  label='Id de Origem'
                  fullWidth
                  value={origemid}
                  onChange={(e) => setOrigemId(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  startIcon={<AddRoundedIcon />}
                >Adicionar Paciente</Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </form>
    </Grid>
  )
}

export default Paciente;