import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { Avatar } from '@mui/material'
import Menu from '@mui/material/Menu'
import  pfp from '../../imgs/pfp.png'

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
    <div>
      <Button
        id = "demo-positioned-button"
        aria-controls = { open ? 'demo-positioned-menu' : undefined }
        aria-haspopup = "true"
        aria-expanded = { open ? 'true' : undefined }
        onClick = { handleClick }
      >
        <Avatar className="avatar" src={pfp} />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose} >Logout</MenuItem>
      </Menu>
    </div>
  )
}
