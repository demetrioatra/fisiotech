import { useState, useEffect } from 'react'
import {
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import DataTable from '../datatable/DataTable';

// Styles
const positionStyles = {
  width: '75.4%',
  height: '440px',
  position: 'absolute',
  borderRadius: 4
}

// Variables
const columns = [
  { field: '_id', hide: true},
  { field: 'nome', headerName: 'Nome', width: 200},
  { field: 'email', headerName: 'E-mail', width: 200},
  { field: 'password', headerName: 'Senha', width: 200, hide: true },
  {
    field: 'actions', headerName: '', width: 70, renderCell: () => (
      <>
        <IconButton>
          <EditIcon />
          <DeleteIcon />
        </IconButton>
      </>
    )
  }
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