import { useState, useEffect } from "react"
import {
  Button,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography
} from "@mui/material"
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import { getPaciente } from '../../api'

// Styles
const paperStyle = {
  padding: 20,
  height: '24vh',
  margin: '0 auto',
  borderRadius: 20
}

const Paciente = () => {
  const [ pacienteId, setPacienteId ] = useState('')
  const [ pacientes, setPacientes ] = useState([])

  useEffect(() => {
    (async () => {
      const resPaciente = await getPaciente();
      setPacientes(resPaciente.data)
    })()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const plano = { pacienteId };

    fetch('http://localhost:3500/planos', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(plano)
    }).then(() => {
      console.log('Novo paciente adicionado!')
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
          ><b>Novo plano</b></Typography>
        </Grid>
        <Grid item>
          <Paper
            style={paperStyle}>
            <Grid container
              direction="column"
              spacing={2}>
              <Grid item>
                <TextField
                  select
                  label='Paciente'
                  fullWidth
                  type="text"
                  required
                  value={pacienteId}
                  onChange={(e) => setPacienteId(e.target.value)}
                >
                  {pacientes.map((p) => (
                    <MenuItem key={p._id} value={p._id}>
                      {p.nome}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item>
                <TextField
                  label='patologia'
                  fullWidth
                  type="text"
                  required
                  value={pacienteId}
                  onChange={(e) => setPacienteId(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  label='Atenção'
                  fullWidth
                  type="text"
                  required
                  value={pacienteId}
                  onChange={(e) => setPacienteId(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  startIcon={<AddRoundedIcon />}
                >Adicionar Plano</Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </form>
    </Grid>
  )
}

export default Paciente;