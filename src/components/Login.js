import React, { useState } from 'react';
import { login } from '../utils';

const Login = ({ setUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <form onSubmit={(event) => login(event, email, password, setUser)}>
            <input type='text' placeholder='email' onChange={(event) => setEmail(event.target.value)}/>
            <input type='text' placeholder='password' onChange={(event) => setPassword(event.target.value)}/>
            <button>Login</button>
        </form>
    )
}

export default Login