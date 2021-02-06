import React from 'react';
import Form from '../components/Form';
import Posts from '../components/Posts';

const Home = ({user, users, setTitle, setContent, posts}) => {
    return(
        <div>
            {user && <Form user={user} setTitle={setTitle} setContent={setContent}/>}
            <Posts user={users} posts={posts}/>
        </div>
    )
};

export default Home