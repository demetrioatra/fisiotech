import { Avatar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import './index.css'

function Header() {
    return (
        <header className = "header">
            <SearchIcon />
            <Avatar className='avatar'/>
        </header>
    )
}

export default Header