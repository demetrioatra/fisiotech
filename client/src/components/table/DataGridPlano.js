import React, { useState, useEffect } from 'react'
import DataTable from '../datatable/DataTable';

const columns = [
  { field: '_id', headerName: 'ID', width: 210 },
  { field: 'pacienteId', headerName: 'Paciente ID', width: 210 },
  { field: 'ficha', headerName: 'Ficha', width: 470 },
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
      fetch('http://localhost:3500/planos')
          .then((response) => response.json())
          .then((json) => setUsers(json))
          .catch(() => onError())
  }, []);

  return (
    <div
    style={positionStyles}>
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