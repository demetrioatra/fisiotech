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
  { field: 'nome', headerName: 'Nome', width: 200 },
  { field: 'telefone', headerName: 'Telefone', width: 150 },
  { field: 'idade', headerName: 'Idade', width: 100 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'origemId', headerName: 'Origem', width: 230 }
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