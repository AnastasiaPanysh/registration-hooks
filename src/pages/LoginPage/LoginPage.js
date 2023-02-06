import { TextField, Button } from '@mui/material'
import { useState } from "react"
import style from './LoginPage.module.css'

function LoginPage() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    function changeForm(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (
        <div className={style['wrapper']}>
            <h1>LOGIN</h1>
            <div>
                <TextField onChange={changeForm} name='email' id="standard-basic" label="email" variant="standard" />
            </div>
            <div>
                <TextField onChange={changeForm} name='password' type='password' id="standard-basic" label="password" variant="standard" />
            </div>
            <div>
                <Button onClick={() => console.log({ form })} variant="outlined" >click</Button>
            </div>
        </div>
    )
}

export default LoginPage