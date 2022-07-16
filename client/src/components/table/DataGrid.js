import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { margin, positions } from '@mui/system'

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'title', headerName: 'Nome', width: 300 },
  { field: 'body', headerName: 'Telefone', width: 600 }
]

const DataGridTeste = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData)

  return (
    <div style={{ height: 500, width: '80%', position:'absolute', marginLeft:'280px'}}>
      <DataGrid className='tabela'
        rows={tableData}
        columns={columns}
        pageSize={12}
      />
    </div>
  )
}

export default DataGridTeste