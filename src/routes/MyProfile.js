import React from 'react';
import Form from '../components/Form';
import Posts from '../components/Posts';

const MyProfile = ({user, setTitle, setContent, posts}) => {
    return(
        <div>
            <Form user={user} setTitle={setTitle} setContent={setContent}/>
            <Posts user={user} posts={posts}/>
        </div>
    )
}

export default MyProfile