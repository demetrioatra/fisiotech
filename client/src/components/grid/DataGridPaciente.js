import {
  useState,
  useEffect
} from 'react'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import DataTable from '../datatable/DataTable'

// Styles
const positionStyles = {
  width: '73.3%',
  height: '440px',
  position: 'absolute',
  borderRadius: 4
}

// Variables
const columns = [
  { field: 'id',              hide: true },
  { field: 'nome',            headerName: 'Nome',             width: 150 },
  { field: 'telefone',        headerName: 'Telefone',         width: 120 },
  { field: 'dataNascimento',  headerName: 'Nascimento',       width: 109 },
  { field: 'email',           headerName: 'E-mail',           width: 200 },
  { field: 'origem',          headerName: 'Origem',           width: 200 },
  { field: 'actions',         width: 99,
    renderCell: () => (
      <>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </>
    )
  }
]

// Component
const PacienteTable = ({ onError }) => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3500/pacientes')
      .then((response) => response.json())
      .then((json) => setPacientes(json))
      .catch(() => onError())
  }, []);

  const rows = pacientes.map((p) => {
    return {
      id: p._id,
      nome: p.nome,
      telefone: p.telefone,
      dataNascimento: p.dataNascimento,
      email: p.email,
      origem: p.origem.map((o) => o.descricao)
    }
  })
  console.log({ rows })
  return (
    <DataTable
      columns={columns}
      rows={rows}
      loading={!pacientes.length}
      sx={positionStyles}
    />
  );
};

export default PacienteTable