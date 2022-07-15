import { Avatar } from '@mui/material'
import './index.css'
import  pfp from '../../imgs/pfp.png'


function Header() {
    return (
        <header className = "header">
            <Avatar src={pfp} />
        </header>
    )
}

export default Header;