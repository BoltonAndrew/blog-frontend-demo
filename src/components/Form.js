import React, { useState } from 'react';
import styled from 'styled-components';
import { addPost } from '../utils';

const Form = ({ user }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState([]);

    return(
        <Container onSubmit={(event) => addPost(event, title, content, user)}>
            <InputContainer type='text' placeholder='Title' onChange={(event) => setTitle(event.target.value)}/>
            <TextareaContainer placeholder='Content' onChange={(event) => setContent(event.target.value)}/>
            <button>Add Post</button>
        </Container>
    )
}

const Container = styled.form`
    width: 41vw;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    margin-top: 1vh;
    align-items: center;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px;
`;

const InputContainer = styled.input`
    background-color: #F6F7F8;
    width: 29vw;
    border-radius: 10px;
`;

const TextareaContainer = styled.textarea`
    background-color: #F6F7F8;
    width: 30vw;
    border-radius: 10px;
`;

export default Form