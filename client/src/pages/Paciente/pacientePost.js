import {
  useEffect,
  useState
} from 'react'
import {
  Button,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { Helmet } from 'react-helmet'
import { getOrigem } from '../../api'
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
  const [dataNascimento, setDataNascimento] = useState('')
  const [email, setEmail] = useState('')
  const [origemId, setOrigemId] = useState('')
  const [origens, setOrigens] = useState([])

  useEffect(() => {
    (async () => {
      const resOrigem = await getOrigem();
      setOrigens(resOrigem.data)
    })()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const paciente = { nome, telefone, dataNascimento, email, origemId }

    fetch('http://localhost:3500/pacientes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paciente)
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
          variant='h5'
          style={{ marginTop: 15 }}
        ><b>Novo Paciente</b></Typography>
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
                label='Telefone'
                fullWidth
                type='text'
                required
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                label='Nascimento'
                fullWidth
                type='text'
                required
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
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
                select
                label='Origem'
                fullWidth
                value={origemId}
                onChange={(e) => setOrigemId(e.target.value)}>
                {origens.map((o) => (
                  <MenuItem key={o._id} value={o._id}>
                    {o.descricao}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item>
              <Button
                fullWidth
                type='submit'
                variant='contained'
                startIcon={<AddRoundedIcon />}
                sx={{ borderRadius: 3, color: 'white', backgroundColor: '#ff6900', '&:hover': { backgroundColor: '#670067 ' } }}
              >Adicionar Paciente</Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </>
  )
}

export default Paciente;
