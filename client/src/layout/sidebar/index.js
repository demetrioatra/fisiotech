import {
    Box,
    Drawer,
    CssBaseline,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon
} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ReportProblemIcon from '@mui/icons-material/ReportProblem'
import FolderCopyIcon from '@mui/icons-material/FolderCopy'
import PieChartIcon from '@mui/icons-material/PieChart'
import ArticleIcon from '@mui/icons-material/Article'
import LoginIcon from '@mui/icons-material/Login'
import SpaIcon from '@mui/icons-material/Spa'
import './index.css'

const drawerWidth = 280

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
                variant = 'permanent'
                anchor = 'left'
            >
                <h1 style={{color:'#ff6900'}}><SpaIcon className = 'icon' fontSize = 'lg' />Fisiotech</h1>
                <List>
                    <ListItem disablePadding >
                        <ListItemButton to = { '/dashboard' }>
                            <ListItemIcon style={{color:'#670067'}}><PieChartIcon /></ListItemIcon>
                            <ListItemText style={{color:'#670067'}}><b>Dashboard</b></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding >
                        <ListItemButton to = { '/doc' }>
                            <ListItemIcon style={{color:'#670067'}}><ArticleIcon /></ListItemIcon>
                            <ListItemText style={{color:'#670067'}}><b>Documentação</b></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton to = { '/paciente' }>
                            <ListItemIcon style={{color:'#670067'}}><AccountCircleIcon /></ListItemIcon>
                            <ListItemText style={{color:'#670067'}}><b>Pacientes</b></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton to = { '/plano' }>
                            <ListItemIcon style={{color:'#670067'}}><FolderCopyIcon /></ListItemIcon>
                            <ListItemText style={{color:'#670067'}}><b>Planos</b></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton to = { '/usuario' }>
                            <ListItemIcon style={{color:'#670067'}}><AccountCircleIcon /></ListItemIcon>
                            <ListItemText style={{color:'#670067'}}><b>Usuario</b></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton to = { '/login' }>
                            <ListItemIcon style={{color:'#670067'}}><LoginIcon /></ListItemIcon>
                            <ListItemText style={{color:'#670067'}}><b>Login</b></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton to = { '*' }>
                            <ListItemIcon style={{color:'#670067'}}><ReportProblemIcon /></ListItemIcon>
                            <ListItemText style={{color:'#670067'}}><b>Not Found</b></ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    )
}
