import { Box,
    Drawer,
    CssBaseline,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './index.css'

const drawerWidth = 280;

export default function PermanentDrawerLeft() {

    function redirect() {
        alert('clicou')
    }

    return (
        <Box className='drawer' sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                className='drawer'
                sx={{
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
                <h1>Fisiotech</h1>
                <List>
                {['Dashboard', 'Pacientes', 'Planos', 'Usuários', 'Login', 'Not Found'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={redirect}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
                </List>
            </Drawer>
        </Box>
    );
}