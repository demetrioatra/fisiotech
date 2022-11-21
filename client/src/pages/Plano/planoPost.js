import {
  useState,
  useEffect
} from "react"
import {
  Button,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography
} from "@mui/material"
import { Helmet } from 'react-helmet'
import { getPaciente, getPatologia } from '../../api'
import AddRoundedIcon from '@mui/icons-material/AddRounded'

// Styles
const paperStyle = {
  padding: 20,
  height: '60vh',
  margin: '0 auto',
  borderRadius: 20
}

const Paciente = () => {
  const [pacienteId, setPacienteId] = useState('')
  const [patologiaId, setPatologiaId] = useState('')
  const [atencao, setAtencao] = useState('')
  const [qtd_sessoes, setQtdSessoes] = useState('')
  const [pacientes, setPacientes] = useState([])
  const [patologias, setPatologias] = useState([])

  useEffect(() => {
    (async () => {
      const resPaciente = await getPaciente();
      const resPatologia = await getPatologia();
      setPacientes(resPaciente.data)
      setPatologias(resPatologia.data)
    })()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const plano = { pacienteId, patologiaId, atencao, qtd_sessoes };

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
    <>     
      <Helmet>
        <title>Cadastro | Fisiotech</title>
      </Helmet>

      <form onSubmit={handleSubmit}>
        <Typography
          variant="h5"
          style={{ marginTop: 15 }}
        ><b>Novo plano</b></Typography>
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
                {pacientes.map((pac) => (
                  <MenuItem key={pac._id} value={pac._id}>
                    {pac.nome}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item>
              <TextField
                label='Patologia'
                select
                fullWidth
                type="text"
                required
                value={patologiaId}
                onChange={(e) => setPatologiaId(e.target.value)}
              >
                {patologias.map((pat) => (
                  <MenuItem key={pat._id} value={pat._id}>
                    {pat.descricao}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item>
              <TextField
                label='Atenção'
                fullWidth
                type="text"
                required
                value={atencao}
                onChange={(e) => setAtencao(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                label='Qtd. de sessões'
                fullWidth
                type="text"
                required
                value={qtd_sessoes}
                onChange={(e) => setQtdSessoes(e.target.value)}
              />
            </Grid>
            <Grid item>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                startIcon={<AddRoundedIcon />}
                sx={{ borderRadius: 3, color: 'white', backgroundColor: '#ff6900', '&:hover': { backgroundColor: '#670067 ' } }}
              >Adicionar Plano</Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </>
  )
}

export default Paciente;