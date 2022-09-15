import React, { useEffect, useState } from 'react'

const Validation = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loginDirty, setLoginDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [loginError, setLoginError] = useState('Login can not be empty')
    const [passwordError, setPasswordError] = useState('Password can not be empty')
    const [formValid, setFormValid] = useState(false)

    useEffect( () => {
        if (loginError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [loginError, passwordError])

    const loginHandler = (e) => {
        setLogin(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setLoginError('Uncorrect login')
        } else {
            setLoginError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.legth < 3 || e.target.value.length >8) {
            setPasswordError('Password should be at least 3 and at maximum 8 characters')
            if (!e.target.value) {
                setPasswordError('Password can not be empty')
            }
        } else {
            setPasswordError('')
        }

    }
    
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'login':
                setLoginDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break            
        }
    }

    
    


  return (
    <div className='validation'>
        <form action="">
            <h1>Autorization</h1>
            {(loginDirty && loginError) && <div style={{color: 'red'}}>{loginError}</div>}
            <input onChange={e => loginHandler(e)} value={login} onBlur={e => blurHandler(e)} name='login' type="text" placeholder='Enter your login...' />
            {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
            <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type="password" placeholder='Enter your password...' />
            <button disabled={!formValid} type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Validation