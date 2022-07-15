import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'nome', headerName: 'Nome', width: 300 },
  { field: 'telefone', headerName: 'Telefone', width: 600 }
]

const DataGridTeste = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3500/pacientes")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData)

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={12}
      />
    </div>
  )
}

export default DataGridTeste