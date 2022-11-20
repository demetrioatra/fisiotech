import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '../../components/menu'
import './index.css'

function Header() {
    return (
        <header>
            <SearchIcon style={{color:'#ff6900'}} />
            <div className='headerBox'>
                <NotificationsIcon style={{color:'#ff6900'}} />
                <Menu />
            </div>
        </header>
    )
}

export default Header;