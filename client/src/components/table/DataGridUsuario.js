import React, { useState, useEffect } from 'react'
import DataTable from '../datatable/DataTable';

// Styles
const positionStyles = {
  width: '76%',
  height: '500px',
  position: 'absolute',
  marginLeft: '280px'
}

// Variables
const columns = [
  { field: '_id', headerName: 'ID', width: 210},
  { field: 'email', headerName: 'Email', width: 300 },
  { field: 'password', headerName: 'Password', width: 380 },
]

// Component
const UserTable = ({ onError }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3500/usuarios')
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch(() => onError())
  }, []);

  return (
    <>
      <DataTable
        rows = { users }
        columns = { columns }
        loading = { !users.length }
        sx = { positionStyles }
      />
    </>
  );
};

export default UserTable