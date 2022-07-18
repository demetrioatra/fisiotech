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
  height: '24vh',
  margin: '0 auto',
  borderRadius: 20
}

const Paciente = () => {
  const [pacienteid, setPacienteId] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const plano = { pacienteid };

    fetch('http://localhost:3500/planos', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(plano)
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
                  label='Id do Paciente'
                  fullWidth
                  type="text"
                  required
                  value={pacienteid}
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