import * as React from 'react'
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography
} from '@mui/material'
import { Container } from '@mui/system'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import PersonIcon from '@mui/icons-material/Person'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import SettingsIcon from '@mui/icons-material/Settings'
import defaultUserIcon from '../../imgs/defaultUserIcon.png'

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id='demo-positioned-button'
        aria-controls={open?'demo-positioned-menu':undefined}
        aria-haspopup='true'
        aria-expanded={open?'true':undefined}
        onClick={handleClick}
      ><Avatar src={defaultUserIcon} sx={{width:'38px',height:'37px'}} /></Button>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Container>
          <Typography variant='subtitle2'>Dr. (a) fisio1</Typography>
          <Typography variant='body2'>fisio1@gmail.com</Typography>
        </Container>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
            <PersonIcon />
            <ListItemText>Perfil</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
            <SettingsIcon />
            <ListItemText>Configurações</ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton to={'/login'}>
            <LockOpenIcon />
            <ListItemText>Logout</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Menu>
    </>
  )
}
