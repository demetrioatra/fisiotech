import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import DataTable from '../datatable/DataTable';

const columns = [
  { field: '_id', headerName: 'ID' },
  { field: 'email', headerName: 'Email', width: 300 },
  { field: 'password', headerName: 'Password', width: 300 },
  
]

const userTableStyles = {
  height: '650px',
};

const UserTable = ({ onError }) => {

 

  const [users, setUsers] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3500/usuarios')
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