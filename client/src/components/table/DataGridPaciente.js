import React, { useState, useEffect } from 'react'
import DataTable from '../datatable/DataTable';

const columns = [
  { field: '_id', headerName: 'ID', width: 210},
  { field: 'nome', headerName: 'Nome', width: 230 },
  { field: 'telefone', headerName: 'Telefone', width: 150 },
  { field: 'idade', headerName: 'Idade', width: 100 },
  { field: 'email', headerName: 'Email', width: 200 },
]

const userTableStyles = {
  height: '650px',
};

const positionStyles = {
  width: '76%',
  position: 'absolute',
  marginLeft: '280px'
}

const UserTable = ({ onError }) => { 
  const [users, setUsers] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3500/pacientes')
          .then((response) => response.json())
          .then((json) => setUsers(json))
          .catch(() => onError())
  }, []);

  return (
    <div style={positionStyles}>
      <DataTable
        rows={users}
        columns={columns}
        loading={!users.length}
        sx={userTableStyles}
      />
    </div>
  );
};

export default UserTable