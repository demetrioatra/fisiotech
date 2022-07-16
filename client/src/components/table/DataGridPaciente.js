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
  { field: 'nome', headerName: 'Nome', width: 230 },
  { field: 'telefone', headerName: 'Telefone', width: 150 },
  { field: 'idade', headerName: 'Idade', width: 100 },
  { field: 'email', headerName: 'Email', width: 200 },
]

// Component
const PacienteTable = ({ onError }) => { 
  const [users, setUsers] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3500/pacientes')
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

export default PacienteTable