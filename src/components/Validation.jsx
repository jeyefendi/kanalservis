import React, { useState } from 'react'

const Validation = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loginDirty, setLoginDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [loginError, setLoginError] = useState('Login can not be empty')
    const [loginError, setPasswordError] = useState('Password can not be empty')
    
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'login':
                setLoginDirty(true)
                break
            case 'password'
                setPasswordDirty(true)
                break            
        }
    }

    
    


  return (
    <div className='validation'>
        <form action="">
            <h1>Autorization</h1>
            {(loginDirty && loginError) && <div style={{color: 'red'}}>{loginError}</div>}
            <input onBlur={e => blurHandler(e)} name='login' type="text" placeholder='Enter your login...' />
            {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
            <input onBlur={e => blurHandler(e)} name='password' type="password" placeholder='Enter your password...' />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Validation