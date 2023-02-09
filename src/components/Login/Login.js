import { TextField, Button } from '@mui/material'
import { useState } from "react"
import style from './Login.module.css'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'


function Login() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    function changeForm(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    function checkValue() {
        if (!form.email || !form.password) alert("value is empty")
        else alert('SUCCESS')

    }

    return (
        <>

            <Header></Header>
            <div className={style['wrapper']}>
                <h1>LOGIN</h1>
                <div>
                    <TextField onChange={changeForm} name='email' id="standard-basic" label="Email" variant="standard" />
                </div>
                <div>
                    <TextField onChange={changeForm} name='password' type='password' id="standard-basic" label="Password" variant="standard" />
                </div>
                <div>
                    <Button onClick={checkValue} variant="outlined" >LOGIN</Button>
                </div>
                <p>Don't you have an account? <Link to="/reg" >SIGN UP</Link> </p>
            </div>
        </>
    )
}

export default Login