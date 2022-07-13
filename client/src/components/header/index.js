import { Avatar } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <header className="header">
            <SearchIcon />
            <NotificationsIcon />
            <Avatar />
        </header>
    )
}

export default Header