import React, { useState } from 'react';
import styled from 'styled-components';
import { login, addUser } from '../utils';

const Login = ({ setUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newUser, setNewUser] = useState(false);
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    return(
        <>
        <Container onSubmit={(event) => {
            if (!newUser) {
                    login(event, email, password, setUser, setErrorMessage)
                } else {
                    addUser(event, name, email, password, setUser)
            }}}>
            {newUser && <InputContainer type='text' placeholder='username' onChange={(event) => setName(event.target.value)}/>}
            <InputContainer type='text' placeholder='email' onChange={(event) => setEmail(event.target.value)}/>
            <InputContainer type='text' placeholder='password' onChange={(event) => setPassword(event.target.value)}/>
            {!newUser && <ButtonContainer>Login</ButtonContainer>}
            {newUser && <ButtonContainer>Create Account</ButtonContainer>}
        </Container>
        {errorMessage && <p>{errorMessage}</p>}
        {!newUser && <ButtonContainer2 onClick={() => setNewUser(true)}>Sign Up</ButtonContainer2>}
        </>
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
    background-color: #F6F7F8;
    &:active {
        border-color: #1877F2;
    };
`;

const ButtonContainer = styled.button`
    margin-left: 1vw;
    border-radius: 5px;
`;

const ButtonContainer2 = styled.button`
    height: 3vh;
    border-radius: 5px;
    align-self: center;
`;

export default Login