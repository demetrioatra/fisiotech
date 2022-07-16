import { Box,
    Drawer,
    CssBaseline,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ReportProblemIcon from '@mui/icons-material/ReportProblem'
import FolderCopyIcon from '@mui/icons-material/FolderCopy'
import PieChartIcon from '@mui/icons-material/PieChart';
import LoginIcon from '@mui/icons-material/Login'
import HomeIcon from '@mui/icons-material/Home';
import SpaIcon from '@mui/icons-material/Spa'
import './index.css'

const drawerWidth = 280;

export default function PermanentDrawerLeft() {
    return (
        <Box className = 'drawer' sx = { { display: 'flex' } }>
            <CssBaseline />
            <Drawer
                className = 'drawer'
                sx = {{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    }
                }}
                variant = "permanent"
                anchor = "left"
            >
                <h1><SpaIcon className = 'icon' fontSize = 'lg' />Fisiotech</h1>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton to = { '/home' }>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton to={'/paciente'}>
                            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                            <ListItemText>Pacientes</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton to={'/plano'}>
                            <ListItemIcon><FolderCopyIcon /></ListItemIcon>
                            <ListItemText>Planos</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton to={'/usuario'}>
                            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                            <ListItemText>Usuario</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton to={'/dashboard'}>
                            <ListItemIcon><PieChartIcon /></ListItemIcon>
                            <ListItemText>Dashboard</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton to={'/login'}>
                            <ListItemIcon><LoginIcon /></ListItemIcon>
                            <ListItemText>Login</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton to={'*'}>
                            <ListItemIcon><ReportProblemIcon /></ListItemIcon>
                            <ListItemText>Not Found</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    )
}
