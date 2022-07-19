import React, { useState, useEffect } from 'react'
import DataTable from '../datatable/DataTable';

// Styles
const positionStyles = {
  width: '74%',
  height: '440px',
  position: 'absolute',
  borderRadius: 4
}

// Variables
const columns = [
  { field: 'id', headerName: 'Plano', hide: true },
  { field: 'paciente', headerName: 'Paciente', width: 200 },
  { field: 'patologia', headerName: 'Patologia', width: 200 },
  { field: 'atencao', headerName: 'Atenção', width: 200 },
  { field: 'qtd_sessoes', headerName: 'Sessões', width: 200 }
]

// Component
const PlanoTable = ({ onError }) => {
  const [planos, setPlanos] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3500/planos')
          .then((response) => response.json())
          .then((json) => setPlanos(json))
          .catch(() => onError())
  }, [])

  const rows = planos.map((pl) => {
    return {
      id: pl._id,
      paciente: pl.paciente.map((pa) => pa.nome)
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