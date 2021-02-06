import React, { useState } from 'react';
import styled from 'styled-components';
import { login } from '../utils';

const Login = ({ setUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <Container onSubmit={(event) => login(event, email, password, setUser)}>
            <InputContainer type='text' placeholder='email' onChange={(event) => setEmail(event.target.value)}/>
            <InputContainer type='text' placeholder='password' onChange={(event) => setPassword(event.target.value)}/>
            <ButtonContainer>Login</ButtonContainer>
        </Container>
    )
}

const Container = styled.form`
    height: 5vh;
    position: relative;
    top: 1vh;
`;

const InputContainer = styled.input`
    margin-left: 1vw;
    border-radius: 5px;
`;

const ButtonContainer = styled.button`
    margin-left: 1vw;
    border-radius: 5px;
`;

export default Login