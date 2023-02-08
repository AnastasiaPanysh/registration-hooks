import { TextField, Button } from '@mui/material'
import { useState } from "react"
import style from './Login.module.css'

function Login() {
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
                <TextField onChange={changeForm} name='email' id="standard-basic" label="Email" variant="standard" />
            </div>
            <div>
                <TextField onChange={changeForm} name='password' type='password' id="standard-basic" label="Password" variant="standard" />
            </div>
            <div>
                <Button onClick={() => console.log({ form })} variant="outlined" >LOGIN</Button>
            </div>
        </div>
    )
}

export default Login