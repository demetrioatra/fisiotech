import { Box,
    Drawer,
    CssBaseline,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon
} from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import LoginIcon from '@mui/icons-material/Login';
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
                <br/>
                <h1><SpaIcon className = 'icon' fontSize = 'lg'  /> Fisiotech</h1>
                <List>
                {['Home', 'Pacientes', 'Planos', 'Usuários', 'Login', 'Not Found'].map((text, index) => (
                    <ListItem key = { text } disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index === 0 && <SpaIcon/>}
                                {index === 1 && <AccountCircleIcon/>}
                                {index === 2 && <FolderCopyIcon/>}
                                {index === 3 && <AccountCircleIcon/>}
                                {index === 4 && <LoginIcon/>}
                                {index === 5 && <ReportProblemIcon/>}
                            </ListItemIcon>
                            <ListItemText primary = { text } />
                        </ListItemButton>
                    </ListItem>
                ))}
                </List>
            </Drawer>
        </Box>
    );
}
