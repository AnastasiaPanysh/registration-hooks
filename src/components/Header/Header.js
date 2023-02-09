import { Link } from "react-router-dom"
import style from "./Header.module.css"
import { Button } from '@mui/material';

function Header() {
    return (
        
        <div className={style['wrapper']}>
            <Link to={'/auth'} className={style['nav-link']}>
                <Button variant="outlined" color="primary">Login</Button>

            </Link>

            <Link to={'/reg'}>
                <Button variant="outlined" color="primary">Sign up</Button>
            </Link>
        </div>
    )
}

export default Header