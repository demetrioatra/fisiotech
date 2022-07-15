import { Box,
    Drawer,
    CssBaseline,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon
} from '@mui/material';
import { Link } from 'react-router-dom'
import SpaIcon from '@mui/icons-material/Spa'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ReportProblemIcon from '@mui/icons-material/ReportProblem'
import FolderCopyIcon from '@mui/icons-material/FolderCopy'
import LoginIcon from '@mui/icons-material/Login'
import './index.css'

const drawerWidth = 280;

export default function PermanentDrawerLeft() {
    return (
        <Box className = 'drawer' sx = { { display: 'flex' } }>
            <CssBaseline />
            <Drawer
                className='drawer'
                sx = {{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
                }}
                variant="permanent"
                anchor="left"
            >
                <h1><SpaIcon className = 'icon' fontSize = 'lg' /> Fisiotech</h1>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon><SpaIcon /></ListItemIcon>
                            <Link to={'/home'}><ListItemText>Home</ListItemText></Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                            <Link to={'/paciente'}><ListItemText>Pacientes</ListItemText></Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon><FolderCopyIcon /></ListItemIcon>
                            <Link to={'/plano'}><ListItemText>Planos</ListItemText></Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                            <Link to={'/usuario'}><ListItemText>Usuario</ListItemText></Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon><LoginIcon /></ListItemIcon>
                            <Link to={'/login'}><ListItemText>Login</ListItemText></Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon><ReportProblemIcon /></ListItemIcon>
                            <Link to={'*'}><ListItemText>Not Found</ListItemText></Link>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    )
}
