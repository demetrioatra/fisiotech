import { useState, useEffect } from 'react'
import {
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import DataTable from '../datatable/DataTable';

// Styles
const positionStyles = {
  width: '73.3%',
  height: '440px',
  position: 'absolute',
  borderRadius: 4
}

// Variables
const columns = [
  { field: '_id',       hide: true },
  { field: 'nome',      headerName: 'Nome',   width: 200 },
  { field: 'email',     headerName: 'E-mail', width: 200 },
  { field: 'status',    headerName: 'Status', width: 100 },
  { field: 'password',  headerName: 'Senha',  hide: true },
  { field: 'actions',   width: 100,
    renderCell: () => (
      <>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
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