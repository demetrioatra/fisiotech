import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '../../components/menu'

export default function Header() {
    return (
        <header style={{
            width: "100%",
            height: "93px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        }}>
            <SearchIcon style={{color:'#ff6900'}} />
            <div style={{display:"flex", alignItems:"center"}}>
                <NotificationsIcon style={{color:'#ff6900'}} />
                <Menu />
            </div>
        </header>
    )
}
