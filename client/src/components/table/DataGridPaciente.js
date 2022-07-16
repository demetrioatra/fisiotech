import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import DataTable from '../datatable/DataTable';

const columns = [
  { field: '_id', headerName: 'ID' },
  { field: 'nome', headerName: 'Nome', width: 300 },
  { field: 'telefone', headerName: 'Telefone', width: 300 },
  { field: 'idade', headerName: 'Idade', width: 300 },
  { field: 'email', headerName: 'Email', width: 300 },
  //{ field: 'origemId', headerName: 'Origem', width: 600 }
]

const userTableStyles = {
  height: '650px',
};

const UserTable = ({ onError }) => {

 

  const [users, setUsers] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3500/pacientes')
          .then((response) => response.json())
          .then((json) => setUsers(json))
          .catch(() => onError())
  }, []);

  return (
      <DataTable
          rows={users}
          
          columns={columns}
          loading={!users.length}
          sx={userTableStyles}
          
      />
  );
};

export default UserTable