import {
    Box,
    List,
    Drawer,
    ListItem,
    CssBaseline,
    ListItemIcon,
    ListItemText,
    ListItemButton
} from '@mui/material'
import { Container } from '@mui/system'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import FolderCopyIcon from '@mui/icons-material/FolderCopy'
import PieChartIcon from '@mui/icons-material/PieChart'
import ArticleIcon from '@mui/icons-material/Article'
import SpaIcon from '@mui/icons-material/Spa'
import './index.css'

const drawerWidth = 280

export default function PermanentDrawerLeft() {
    return (
        <Box className='drawer'
        sx={{display:'flex'}}
        >
            <CssBaseline />
            <Drawer className='drawer'
                variant='permanent'
                anchor='left'
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    }
                }}
                >
                <Container>
                    <h1 style={{color:'#ff6900'}}><SpaIcon fontSize='lg' />Fisiotech</h1>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton to={'/dashboard'} sx={{borderRadius: "8px"}}>
                                <ListItemIcon style={{color:'#670067'}}><PieChartIcon /></ListItemIcon>
                                <ListItemText style={{color:'#670067', marginLeft:'-20px'}}>Dashboard</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton to={'/paciente'} sx={{borderRadius: "8px"}}>
                                <ListItemIcon style={{color:'#670067'}}><SupervisorAccountIcon /></ListItemIcon>
                                <ListItemText style={{color:'#670067', marginLeft:'-20px'}}>Pacientes</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton to={'/plano'} sx={{borderRadius: "8px"}}>
                                <ListItemIcon style={{color:'#670067'}}><FolderCopyIcon /></ListItemIcon>
                                <ListItemText style={{color:'#670067', marginLeft:'-20px'}}>Planos</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton to={'/usuario'} sx={{borderRadius: "8px"}}>
                                <ListItemIcon style={{color:'#670067'}}><AccountCircleIcon /></ListItemIcon>
                                <ListItemText style={{color:'#670067', marginLeft:'-20px'}}>Usuários</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding >
                            <ListItemButton href='http://localhost:3500/docs' sx={{borderRadius: "8px"}}>
                                <ListItemIcon style={{color:'#670067'}}><ArticleIcon /></ListItemIcon>
                                <ListItemText style={{color:'#670067', marginLeft:'-20px'}}>Documentação</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Container>
            </Drawer>
        </Box>
    )
}
