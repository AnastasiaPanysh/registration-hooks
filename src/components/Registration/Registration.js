import { TextField, Button } from '@mui/material'
import { useState } from "react"
import style from './Registration.module.css'

function Registration() {
    const [form, setForm] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    function changeForm(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    function comparePasswords() {
        try {
            if (form.password !== form.confirmPassword) throw new Error('not same values')
            else alert('success')
        } catch (error) {
            alert(error.message)
        }
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
                <TextField onChange={changeForm} name='password' type='password' id="standard-basic" label="Confirm Password" variant="standard" />
            </div>
            <div>
                <Button onClick={comparePasswords} variant="outlined" >SIGN UP</Button>
            </div>
            <p>
                Already have an account?
                {/* <Link>
                    Log In
                </Link> */}
            </p>

        </div>
    )
}
export default Registration