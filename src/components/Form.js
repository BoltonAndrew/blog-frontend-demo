import React, { useState } from 'react';
import styled from 'styled-components';
import { addPost } from '../utils';

const Form = ({ user }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState([]);

    return(
        <form onSubmit={(event) => addPost(event, title, content, user)}>
            <input type='text' placeholder='Title' onChange={(event) => setTitle(event.target.value)}/>
            <textarea placeholder='Content' onChange={(event) => setContent(event.target.value)}/>
            <button>Add Post</button>
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

export default Form