import React, { useState, useEffect } from 'react'
import DataTable from '../datatable/DataTable';

const columns = [
  { field: '_id', headerName: 'ID' },
  { field: 'nome', headerName: 'Nome', width: 300 },
  { field: 'telefone', headerName: 'Telefone', width: 300 },
  { field: 'idade', headerName: 'Idade', width: 300 },
  { field: 'email', headerName: 'Email', width: 300 },
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