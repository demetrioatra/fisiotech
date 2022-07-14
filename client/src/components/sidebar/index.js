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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SpaIcon from '@mui/icons-material/Spa';
import './index.css'

const drawerWidth = 280;

export default function PermanentDrawerLeft() {

    function redirect() {
        
    }

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
                {['Home', 'Pacientes', 'Planos', 'Usuários', 'Login', 'Not Found'].map((text, index) => (
                    <ListItem key = { text } disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                { index % 2 === 0 ? <InboxIcon /> : <MailIcon /> }
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
