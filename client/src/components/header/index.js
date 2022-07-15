import { Avatar } from '@mui/material'
import avatar from '../../imgs/avatar.png'
import SearchIcon from '@mui/icons-material/Search'
import './index.css'

function Header() {
    return (
        <header className = "header">
            <Avatar className='avatar' src={avatar} />
        </header>
    )
}

export default Header