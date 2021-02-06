import React, { useState } from 'react';
import styled from 'styled-components';
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

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #F6F7F8
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Login