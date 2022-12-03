import { useState, useEffect } from 'react'
import {
  IconButton
} from '@mui/material';
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
  { field: 'id',          hide: true },
  { field: 'paciente',    headerName: 'Paciente',   width: 150 },
  { field: 'patologia',   headerName: 'Patologia',  width: 220 },
  { field: 'atencao',     headerName: 'Atenção',    width: 100 },
  { field: 'qtd_sessoes', headerName: 'Sessões',    width: 100 },
  { field: 'data',        headerName: 'Data',       width: 102 },
  { field: 'hora',        headerName: 'Hora',       width: 75 },
  { field: 'pago',        headerName: 'Pago',       width: 50 },
  { field: 'compareceu',  headerName: 'Compareceu', width: 75 },
  { field: 'actions',     width: 100,
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
const PlanoTable = ({ onError }) => {
  const [planos, setPlanos] = useState([])

  useEffect(() => {
      fetch('http://localhost:3500/planos')
          .then((response) => response.json())
          .then((json) => setPlanos(json))
          .catch(() => onError())
  }, [])

  const rows = planos.map((pl) => {
    return {
      id: pl._id,
      paciente: pl.paciente.map((pa) => pa.nome),
      patologia: pl.ficha.map((f) => f.patologiaId),
      atencao: pl.ficha.map((f) => f.atencao),
      qtd_sessoes: pl.ficha.map((f) => f.qtd_sessoes),
      data: pl.ficha.map((f) => f.sessoes.map((s) => s.data)),
      hora: pl.ficha.map((f) => f.sessoes.map((s) => s.hora)),
      pago: pl.ficha.map((f) => f.sessoes.map((s) => s.pago) == true ? 'Não' : 'Sim'),
      compareceu: pl.ficha.map((f) => f.sessoes.map((s) => s.compareceu) == true ? 'Não' : 'Sim'),
    }
  })

  return (
    <>
      <DataTable
        columns = { columns }
        rows = { rows }
        loading = { !planos.length }
        sx = { positionStyles }
      />
    </>
  )
}

export default PlanoTable