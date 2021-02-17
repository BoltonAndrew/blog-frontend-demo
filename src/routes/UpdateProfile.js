import React, { useState } from 'react';
import styled from 'styled-components';
import { updateUser, deleteUser } from '../utils';

const UpdateProfile = ({user, setUser}) => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    
    return(
        <>
        <FormContainer onSubmit={(event) => updateUser(event, user, userName, userEmail, userPassword, setUser)}>
            <InputContainer type='text' name='name' onChange={(event) => setUserName(event.target.value)}/>
            <InputContainer type='text' name='email' onChange={(event) => setUserEmail(event.target.value)}/>
            <InputContainer type='text' name='password' onChange={(event) => setUserPassword(event.target.value)}/>
            <button>Update Details</button>
        </FormContainer>
        <FormContainer onSubmit={(event) => deleteUser(event, user, setUser)}>
            <button>Delete Profile</button>
        </FormContainer>
        </>
    )
};

const FormContainer = styled.form`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
`;

const InputContainer = styled.input`

`;

export default UpdateProfile