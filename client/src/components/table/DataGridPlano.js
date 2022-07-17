import React, { useState, useEffect } from 'react'
import DataTable from '../datatable/DataTable';

// Styles
const positionStyles = {
  width: '74%',
  height: '440px',
  position: 'absolute'
}

// Variables
const columns = [
  { field: 'pacienteId', headerName: 'Paciente ID', width: 210 },
  { field: 'ficha', headerName: 'Ficha', width: 470 },
]

// Component
const PlanoTable = ({ onError }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3500/planos')
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

export default PlanoTable