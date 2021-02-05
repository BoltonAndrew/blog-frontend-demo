import React, { useState } from 'react';
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

export default Form