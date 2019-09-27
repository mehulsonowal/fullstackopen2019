import React from 'react'

const LoginForm = ({ username, password, handleUserChange, handlePasswordChange, handleLogin }) => {
    return (
        <div>
            <h1> Login </h1>
            <form onSubmit={handleLogin}>
                <label> username </label>
                <input placeholder='username' onChange={handleUserChange} value={username} />
                <br />
                <label> password </label>
                <input placeholder='password' onChange={handlePasswordChange} value={password} />
                <br />
                <button type='submit'> login </button>
            </form>

        </div>
    )
}

export default LoginForm