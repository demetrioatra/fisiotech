import { Avatar } from '@mui/material'
import  pfp from '../../imgs/pfp.png'
import Menu from '../menu/'
import './index.css'

function Header() {

    function showMenu() {
        return <Menu />
    }
    return (
        <header className = "header">
            <Menu />
        </header>
    )
}

export default Header;